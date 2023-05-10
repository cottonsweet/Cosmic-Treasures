package cosmic.treasures.repository;

import cosmic.treasures.entity.MemberEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity,Long> {

    Optional<MemberEntity> findByLoginId(String loginId);
    boolean existsByLoginId(String loginId);


}
