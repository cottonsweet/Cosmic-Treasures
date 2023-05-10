package cosmic.treasures.web;

import cosmic.treasures.dto.auth.SignIn;
import cosmic.treasures.dto.auth.SignUp;
import cosmic.treasures.security.TokenProvider;
import cosmic.treasures.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final MemberService memberService;
    private final TokenProvider tokenProvider;

    @PostMapping("/check/{password}")
    public ResponseEntity<?> checkPassword(@RequestParam String password) {
        return null;
    }

    @GetMapping("/exist/{loginId}")
    public ResponseEntity<?> checkExistLoginId (
        @RequestParam String loginid
    ) {
        return null;
    }


    @PostMapping("/exist/{email}")
    public ResponseEntity<?> checkExistEmail(@RequestParam String email) {
        return null;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp (
        @RequestBody SignUp.Request request
    ) {
        SignUp.Response result = this.memberService.register(request);
        
        return ResponseEntity.ok(result) ;
    }


    @PostMapping("/signin")
    public ResponseEntity<?> signIn(
        @RequestBody SignIn.Request request
    ) {
        var member = memberService.authenticate(request);
        var token  = tokenProvider.generateToken(member.getLoginId(), member.getRoles());
        log.info("user login -> " + request.getLoginId());
        return ResponseEntity.ok(token);
    }
}
