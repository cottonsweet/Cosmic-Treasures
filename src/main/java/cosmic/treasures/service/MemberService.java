package cosmic.treasures.service;

import cosmic.treasures.dto.auth.SignIn;
import cosmic.treasures.dto.auth.SignUp;
import cosmic.treasures.entity.MemberEntity;
import cosmic.treasures.exception.impl.AlreadyExistUserException;
import cosmic.treasures.exception.impl.NotFoundUserException;
import cosmic.treasures.exception.impl.PasswordMissMatchException;
import cosmic.treasures.repository.MemberRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService implements UserDetailsService {
    private final PasswordEncoder passwordEncoder;
    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String loginId) throws UsernameNotFoundException {
        return this.memberRepository.findByLoginId(loginId)
            .orElseThrow(() -> new UsernameNotFoundException("couldn't find user -> " + loginId));
    }

    public boolean userExists(String loginId) {
        Optional<MemberEntity> member = this.memberRepository.findByLoginId(loginId);
        return member.isPresent();
    }
    public SignUp.Response register(SignUp.Request member) {
        boolean exists = this.memberRepository.existsByLoginId(member.getLoginId());
        if (exists) {
            throw new AlreadyExistUserException();
        }
        member.setPassword(passwordEncoder.encode(member.getPassword()));
        var result = this.memberRepository.save(member.toEntity());
        log.info(result.toString());
        return SignUp.Response.from(member);
    }
    public MemberEntity authenticate(SignIn.Request request) {
        var user = this.memberRepository.findByLoginId(request.getLoginId())
            .orElseThrow(NotFoundUserException::new);

        //log.info(String.format("insert: %s || saved : %s", passwordEncoder.encode(request.getPassword()), user.getPassword()));

        if (!this.passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new PasswordMissMatchException();
        }
        return user;
    }
}
