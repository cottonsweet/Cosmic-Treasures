package cosmic.treasures.dto.capsule;

import cosmic.treasures.entity.CapsuleEntity;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

public class UpdateCapsule {

    @Data
    public static class Request {

        private String title;

        private String message;

        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime releasedAt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Response {
        private Long id;

        private String title;

        private String message;

        @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime releasedAt;

        public static Response from (CapsuleEntity capsule) {
            return Response.builder()
                .id(capsule.getId())
                .title(capsule.getTitle())
                .message(capsule.getMessage())
                .releasedAt(capsule.getReleasedAt())
                .build();
        }
    }

}
