package cosmic.treasures.dto.capsule;

import cosmic.treasures.entity.CapsuleEntity;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class DeleteCapsule {
    @Builder
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private Long capsuleId;
        private LocalDateTime deletedAt;

        public static Response from (CapsuleEntity capsule) {
            return Response.builder()
                .capsuleId(capsule.getId())
                .deletedAt(capsule.getDeletedAt())
                .build();
        }
    }
}
