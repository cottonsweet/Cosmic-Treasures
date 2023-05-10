package cosmic.treasures.service;

import cosmic.treasures.dto.capsule.CapsuleInfo;
import cosmic.treasures.dto.capsule.CreateCapsule;
import cosmic.treasures.dto.capsule.DeleteCapsule;
import cosmic.treasures.dto.capsule.UpdateCapsule;
import cosmic.treasures.entity.CapsuleEntity;
import cosmic.treasures.entity.MemberEntity;
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
            .orElseThrow(() -> new RuntimeException("NO_USER"));

        var capsules = capsuleRepository.findAllByMemberIdAndDeletedAtIsNull(member);
        return capsules.stream().map(CapsuleInfo::from).collect(Collectors.toList());
    }

    public CapsuleInfo getCapsuleInfo(Long capsuleId, String loginId) {
        var member = memberRepository.findByLoginId(loginId)
                .orElseThrow(() -> new RuntimeException("NO_USER"));
        var capsule = capsuleRepository.findByIdAndDeletedAtIsNull(capsuleId)
                .orElseThrow(() -> new RuntimeException("No_Content"));

        if (!capsule.getMemberId().getId().equals(member.getId())) {
            throw new RuntimeException("FORBIDDEN");
        }

        return CapsuleInfo.from(capsule);
    }

    @Transactional
    public CreateCapsule.Response createCapsule(CreateCapsule.Request capsule, String loginId) {
        var member = memberRepository.findByLoginId(loginId)
            .orElseThrow(() -> new RuntimeException("NO_USER"));

        var result = capsuleRepository.save(capsule.toEntity(member));
        return CreateCapsule.Response.from(result);
    }

    @Transactional
    public CapsuleInfo openCapsule(Long capsuleId, String loginId) {
        var capsule = MemberIdisMathchCapsuleId(capsuleId, loginId);
        LocalDateTime now = LocalDateTime.now();

        if (capsule.getReleasedAt().isAfter(now)
                && !capsule.getReleasedAt().isEqual(now)) {
            throw new RuntimeException("BEFORE_RELEASED_DAY");
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
            .orElseThrow(() -> new RuntimeException("NO_CONTENT"));

        if (!capsule.getMemberId().getId().equals(memberId)) {
            throw new RuntimeException("FORBIDDEN");
        }

        if (!(capsule.getDeletedAt() == null)) {
            throw new RuntimeException("NO_CONTENT");
        }

        return capsule;
    }

    @Transactional
    public DeleteCapsule.Response deleteCapsule(Long capsuleId, String loginId) {

        Long memberId = this.getMemberIdByLoginId(loginId);

        var capsule = capsuleRepository.findById(capsuleId)
            .orElseThrow( () -> new RuntimeException("NO_CONTENT") );

        if (capsule.getDeletedAt() != null) {
            throw new RuntimeException("ALREADY_DELETED");
        }

        if (!capsule.getMemberId().getId().equals(memberId)) {
            throw new RuntimeException("FORBIDDEN");
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
