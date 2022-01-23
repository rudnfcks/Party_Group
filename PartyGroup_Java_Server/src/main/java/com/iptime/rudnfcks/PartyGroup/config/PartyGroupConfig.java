package com.iptime.rudnfcks.PartyGroup.config;

import com.iptime.rudnfcks.PartyGroup.repository.JpaPartysRepository;
import com.iptime.rudnfcks.PartyGroup.repository.PartysRepository;
import com.iptime.rudnfcks.PartyGroup.service.PartysService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;

@Configuration
public class PartyGroupConfig {
    private final EntityManager em;
    private final PartysRepository partysRepository;

    @Autowired
    public PartyGroupConfig(EntityManager em, PartysRepository partysRepository) {
        this.em = em;
        this.partysRepository = partysRepository;
    }

    @Bean
    public PartysRepository partysRepository(EntityManager em) {
        return new JpaPartysRepository(em);
    }

    @Bean
    public PartysService partysService() {
        return new PartysService(partysRepository);
    }
}
