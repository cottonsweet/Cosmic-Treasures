package cosmic.treasures.dto.auth;

import cosmic.treasures.entity.MemberEntity;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import io.swagger.v3.oas.annotations.media.Schema;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


public class SignIn {

    @Schema(description = "회원가입 Request DTO")
    @Data
    public static class Request {
        @NotBlank
        @Schema(description = "로그인 아이디",name = "loginId", required = true)
        private String loginId;
        @NotBlank
        @Schema(description = "비밀번호",name = "password", required = true)
        private String password;
    }

    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private String loginId;
        private String token;

        public Response from (MemberEntity member) {
            return Response.builder()
                .loginId(member.getLoginId())
                .build();
        }
    }
}
