package cosmic.treasures.dto.capsule;

import cosmic.treasures.entity.CapsuleEntity;
import java.time.LocalDateTime;
import java.util.Date;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CapsuleInfo {
    @Getter
    @Setter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    @Data
    public static class Request {

        private int page;
        private String sort;
        private Date startDate;
        private Date endDate;
        private String day;
    }

    private Long id;
    private String title;
    private String message;
    private LocalDateTime openedAt;
    private boolean isOpened;
    private LocalDateTime releasedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static CapsuleInfo from (CapsuleEntity capsule) {
        return CapsuleInfo.builder()
                .id(capsule.getId())
                .title(capsule.getTitle())
                .message(capsule.getMessage())
                .openedAt(capsule.getOpenedAt())
                .isOpened(capsule.getOpenedAt() != null)
                .releasedAt(capsule.getReleasedAt())
                .createdAt(capsule.getCreatedAt())
                .updatedAt(capsule.getUpdatedAt())
                .build();

    }
}
