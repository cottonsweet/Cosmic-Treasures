package cosmic.treasures.service;

import cosmic.treasures.dto.capsule.CapsuleInfo;
import cosmic.treasures.dto.capsule.CreateCapsule;
import cosmic.treasures.dto.capsule.DeleteCapsule;
import cosmic.treasures.dto.capsule.UpdateCapsule;
import cosmic.treasures.entity.CapsuleEntity;
import cosmic.treasures.entity.MemberEntity;
import cosmic.treasures.exception.impl.BeforeReleaseException;
import cosmic.treasures.exception.impl.ForbiddenException;
import cosmic.treasures.exception.impl.GoneContentException;
import cosmic.treasures.exception.impl.NoContentException;
import cosmic.treasures.exception.impl.NotFoundUserException;
import cosmic.treasures.exception.impl.UnAuthorizedUserException;
import cosmic.treasures.repository.CapsuleRepository;
import cosmic.treasures.repository.MemberRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class CapsuleService {
    private final CapsuleRepository capsuleRepository;
    private final MemberRepository memberRepository;

    public List<CapsuleInfo> getCapsuleList(String loginId, Map<String,String> query) {
        // TO-DO Query 작업하기

        var member = memberRepository.findByLoginId(loginId)
            .orElseThrow(NotFoundUserException::new);

        var capsules = capsuleRepository.findAllByMemberIdAndDeletedAtIsNull(member);
        return capsules.stream().map(CapsuleInfo::from).collect(Collectors.toList());
    }

    public CapsuleInfo getCapsuleInfo(Long capsuleId, String loginId) {
        var member = memberRepository.findByLoginId(loginId)
                .orElseThrow(NotFoundUserException::new);

        var capsule = capsuleRepository.findByIdAndDeletedAtIsNull(capsuleId)
                .orElseThrow(NoContentException::new);

        if (!capsule.getMemberId().getId().equals(member.getId())) {
            throw new ForbiddenException();
        }

        return CapsuleInfo.from(capsule);
    }

    @Transactional
    public CreateCapsule.Response createCapsule(CreateCapsule.Request capsule, String loginId) {
        var member = memberRepository.findByLoginId(loginId)
            .orElseThrow(NotFoundUserException::new);

        var result = capsuleRepository.save(capsule.toEntity(member));
        return CreateCapsule.Response.from(result);
    }

    @Transactional
    public CapsuleInfo openCapsule(Long capsuleId, String loginId) {
        var capsule = MemberIdisMathchCapsuleId(capsuleId, loginId);
        LocalDateTime now = LocalDateTime.now();

        if (capsule.getReleasedAt().isAfter(now)
                && !capsule.getReleasedAt().isEqual(now)) {
            throw new BeforeReleaseException();
        }
        capsule.setOpenedAt(LocalDateTime.now());

        return CapsuleInfo.from(
            capsuleRepository.save(capsule)
        );
    }


    @Transactional
    public UpdateCapsule.Response updateCapsule(
        Long capsuleId,
        UpdateCapsule.Request request,
        String loginId
    ) {
        var capsule = MemberIdisMathchCapsuleId(capsuleId, loginId);
        String newMessage = request.getMessage();
        String newTitle = request.getTitle();
        log.info(newTitle, newMessage);

        if (!(newTitle == null || newTitle.isBlank())) {
            capsule.setTitle(request.getTitle());
            log.info("edit title");
        }

        if (!(newMessage == null || newMessage.isBlank())) {
            capsule.setMessage(request.getMessage());
            log.info("edit message");
        }

        if (request.getReleasedAt() != null) {
            capsule.setReleasedAt(request.getReleasedAt());
            log.info("edit releasedDate");
        }

        return UpdateCapsule.Response.from(
            capsuleRepository.save(capsule)
        );
    }

    private CapsuleEntity MemberIdisMathchCapsuleId(Long capsuleId, String loginId) {
        Long memberId = this.getMemberIdByLoginId(loginId);

        log.info(String.format("%s find %d", loginId, capsuleId));
        var capsule = capsuleRepository.findById(capsuleId)
            .orElseThrow(NoContentException::new);

        if (!capsule.getMemberId().getId().equals(memberId)) {
            throw new ForbiddenException();
        }

        if (!(capsule.getDeletedAt() == null)) {
            throw new NoContentException();
        }

        return capsule;
    }

    @Transactional
    public DeleteCapsule.Response deleteCapsule(Long capsuleId, String loginId) {

        Long memberId = this.getMemberIdByLoginId(loginId);

        var capsule = capsuleRepository.findById(capsuleId)
            .orElseThrow(NoContentException::new);

        if (capsule.getDeletedAt() != null) {
            throw new GoneContentException();
        }

        if (!capsule.getMemberId().getId().equals(memberId)) {
            throw new UnAuthorizedUserException();
        }
        capsule.setDeletedAt(LocalDateTime.now());

        return DeleteCapsule.Response.from(
            capsuleRepository.save(capsule)
        );
    }

    private Long getMemberIdByLoginId (String loginId) {
        var member = memberRepository.findByLoginId(loginId);
        return member.map(MemberEntity::getId).orElse(null);
    }
}
