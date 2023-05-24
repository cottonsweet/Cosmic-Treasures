package cosmic.treasures.web;

import cosmic.treasures.dto.auth.SignIn;
import cosmic.treasures.dto.auth.SignUp;
import cosmic.treasures.exception.impl.AlreadyExistUserException;
import cosmic.treasures.exception.impl.InValidValueError;
import cosmic.treasures.security.TokenProvider;
import cosmic.treasures.service.AuthService;
import cosmic.treasures.service.MemberService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Tag(name = "auth", description = "회원 인증,인가 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final MemberService memberService;
    private final TokenProvider tokenProvider;

    private final AuthService authService;

    @Operation(summary = "비밀번호 유효 검사", description = "비밀번호 validaion 여부를 검증합니다" )
    @ApiImplicitParam(name="password", value="비번 후보", paramType = "path")
    @GetMapping("/check/{password}")
    public ResponseEntity<?> checkPassword(@PathVariable String password) {
        boolean isValid = authService.checkPasswordValid(password);
        if (!isValid) {
            throw new InValidValueError();
        }
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/exist/{loginId}")
    public ResponseEntity<?> checkExistLoginId (
        @RequestParam String loginid
    ) {
        boolean isMemberExists = memberService.userExists(loginid);
        if (isMemberExists) {
            throw new AlreadyExistUserException();
        }
        return ResponseEntity.ok(!isMemberExists);
    }

    @PostMapping("/exist/{email}")
    public ResponseEntity<?> checkExistEmail(@PathVariable String email) {
        return null;
    }

    @Operation(
        summary = "회원 가입",
        description = "유저 아이디, 비밀번호, 닉네임을 입력한 간편 회원가입"
    )
    @PostMapping("/signup")
    public ResponseEntity<SignUp.Response> signUp (
        @RequestBody SignUp.Request signupRequest
    ) {
        SignUp.Response result = this.memberService.register(signupRequest);
        
        return ResponseEntity.ok(result) ;
    }


    @ApiOperation(httpMethod = "POST",
        value="로그인",
        notes = "로그인 기능 API"
    )
    @ApiResponses(
        value = {
            @ApiResponse(code = 200,
                message ="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGFmbHM5NTk2Iiwicm9sZXMiOlsiUk9MRV9OT1JNQUwiXSwiaWF0IjoxNjg0ODgyNDUxLCJleHAiOjE2ODQ4ODYwNTF9.HjiR20lltt_WoTtc9mQDAibcip3gj6_VZJ6kWJtYCZNqqrUliX0H1PnukRBaJg58CtW422iifH323s_NgNrSiQ",
                response = String.class,
                reference = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGFmbHM5NTk2Iiwicm9sZXMiOlsiUk9MRV9OT1JNQUwiXSwiaWF0IjoxNjg0ODgyNDUxLCJleHAiOjE2ODQ4ODYwNTF9.HjiR20lltt_WoTtc9mQDAibcip3gj6_VZJ6kWJtYCZNqqrUliX0H1PnukRBaJg58CtW422iifH323s_NgNrSiQ"
            ),
            @ApiResponse(code = 400, message= "PASS_MISS_MATCH")
        }
    )
    @PostMapping("/signin")
    public ResponseEntity<String> signIn(
        @RequestBody
        SignIn.Request loginRequest
    ) {
        var member = memberService.authenticate(loginRequest);
        var token  = tokenProvider.generateToken(member.getLoginId(), member.getRoles());
        log.info("user login -> " + loginRequest.getLoginId());
        return ResponseEntity.ok(token);
    }
}
