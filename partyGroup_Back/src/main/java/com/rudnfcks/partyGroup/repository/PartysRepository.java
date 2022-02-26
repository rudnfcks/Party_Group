package com.rudnfcks.partyGroup.repository;

import com.rudnfcks.partyGroup.domain.Partys;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartysRepository extends JpaRepository<Partys, Long> {
}
