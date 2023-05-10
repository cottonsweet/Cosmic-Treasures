package cosmic.treasures.dto.auth;

import cosmic.treasures.entity.MemberEntity;
import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class SignUp {
    @Data
    public static class Request {
        @NotBlank
        private String loginId;
        @NotBlank
        private String password;
        @NotBlank
        private String nickname;

        public MemberEntity toEntity() {
            List<String> roles =  new ArrayList<>();
            roles.add("ROLE_NORMAL");
            return MemberEntity.builder()
                .loginId(this.loginId)
                .password(this.password)
                .nickname(this.nickname)
                .roles(roles)
                .build();
        }
        public void setPassword(String password) {
            this.password = password;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private String loginId;
        private String nickname;

        public static Response from (Request member) {
            return Response.builder()
                .loginId(member.getLoginId())
                .nickname(member.getNickname())
                .build();
        }
    }
}
