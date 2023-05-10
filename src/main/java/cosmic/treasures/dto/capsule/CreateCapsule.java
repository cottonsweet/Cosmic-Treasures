package cosmic.treasures.dto.capsule;

import com.fasterxml.jackson.annotation.JsonFormat;
import cosmic.treasures.entity.CapsuleEntity;
import cosmic.treasures.entity.MemberEntity;
import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

public class CreateCapsule {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request {
        @NotBlank
        private String title;
        @NotBlank
        private String message;
        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime releasedAt;

        public CapsuleEntity toEntity(MemberEntity member) {
            return CapsuleEntity.builder()
                .title(this.title)
                .message(this.message)
                .releasedAt(this.releasedAt)
                .memberId(member)
                .build();
        }
    }
    
    @Getter
    @Setter
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long id;
        private String title;
        private String message;
        private LocalDateTime releasedAt;

        public static Response from(CapsuleEntity capsule) {
            return Response.builder()
                .id(capsule.getId())
                .title(capsule.getTitle())
                .message(capsule.getMessage())
                .releasedAt(capsule.getReleasedAt())
                .build();
        }
    }

}
