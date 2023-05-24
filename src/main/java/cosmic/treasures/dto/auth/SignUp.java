package cosmic.treasures.dto.auth;

import cosmic.treasures.entity.MemberEntity;
import io.swagger.annotations.ApiModelProperty;
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
        
        @ApiModelProperty(name = "loginId", example = "로그인 ID", required = true)
        @NotBlank
        private String loginId;
        @ApiModelProperty(name = "password", example = "비밀 번호", required = true)
        @NotBlank
        private String password;
        @ApiModelProperty(name = "nickname", example = "닉네임", required = true)
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
