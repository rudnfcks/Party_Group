package com.rudnfcks.partyGroup.repository;

import com.rudnfcks.partyGroup.domain.Partys;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public interface PartysRepository extends JpaRepository<Partys, Long> {
    public List<Partys> findByDate(String date, Sort sort);
}
