package cosmic.treasures.repository;

import cosmic.treasures.entity.CapsuleEntity;
import cosmic.treasures.entity.MemberEntity;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CapsuleRepository extends JpaRepository<CapsuleEntity, Long> {
    Optional<CapsuleEntity> findByIdAndDeletedAtIsNull(Long id);

    List<CapsuleEntity> findAllByMemberIdAndDeletedAtIsNull(MemberEntity member);

}
