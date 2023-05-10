package cosmic.treasures.dto.auth;

import cosmic.treasures.entity.MemberEntity;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class SignIn {
    @Data
    public static class Request {

        @NotBlank
        private String loginId;
        @NotBlank
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
