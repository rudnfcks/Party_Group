package com.iptime.rudnfcks.PartyGroup.repository;

import com.iptime.rudnfcks.PartyGroup.domain.Member;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class JpaPartysRepositoryTest {
    @Autowired PartysRepository partysRepository;

    @Test
    void save() {
        Member member = new Member();
        member.setName("이름");
        member.setSecession(false);
        member.setSecession_why("");

        Partys partys = new Partys();
        partys.setYear((short) 2022);
        partys.setMonth((short) 1);
        partys.setDay((short) 20);
        partys.setTime("21:58");
        partys.setPlace("나도 모르는 장소");
        partys.setCancel(false);
        partys.setMember(member);

        partysRepository.save(partys);
        assertThat(partysRepository.findAll().size()).isEqualTo(1);
    }

    @Test
    void findAll() {
    }

    @Test
    void findById() {
    }

    @Test
    void findByDate() {
    }

    @Test
    void addMember() {
    }

    @Test
    void delMember() {
    }

    @Test
    void delParty() {
    }

    @Test
    void modifyParty() {
    }
}