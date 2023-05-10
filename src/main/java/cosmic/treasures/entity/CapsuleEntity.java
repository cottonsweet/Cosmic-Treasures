package cosmic.treasures.entity;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="CAPSULE", schema = "cosmic_dev")
@EntityListeners(AuditingEntityListener.class)
public class CapsuleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private MemberEntity memberId;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false)
    private String message;

    @Column(name= "released_at")
    private LocalDateTime releasedAt;

    @Column(name= "opened_at")
    private LocalDateTime openedAt;

    @Column(name= "created_at")
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(name= "updated_at")
    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Column(name= "deleted_at")
    private LocalDateTime deletedAt;
}
