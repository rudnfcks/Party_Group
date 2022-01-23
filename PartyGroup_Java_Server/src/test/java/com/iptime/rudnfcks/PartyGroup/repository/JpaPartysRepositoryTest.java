package com.iptime.rudnfcks.PartyGroup.repository;

import com.iptime.rudnfcks.PartyGroup.domain.Member;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class JpaPartysRepositoryTest {

    @Autowired
    PartysRepository partysRepository;

    @Test
    void 저장() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName("이름");
        members.add(member);

        Partys partys = makePartys(members);

        // when
        partysRepository.save(partys);

        // then
        assertThat(partysRepository.findAll().size()).isEqualTo(1);
    }

    @Test
    void 모두_검색() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName("이름");
        members.add(member);

        Partys partys1 = makePartys(members);
        Partys partys2 = makePartys(members);

        partysRepository.save(partys1);
        partysRepository.save(partys2);

        // when then
        assertThat(partysRepository.findAll().size()).isEqualTo(2);
    }

    @Test
    void 아이디_검색() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName("이름");
        members.add(member);

        Partys partys1 = makePartys(members, "장소 1");
        Partys partys2 = makePartys(members, "장소 2");

        partysRepository.save(partys1);
        partysRepository.save(partys2);

        // when then
        assertThat(partysRepository.findById(1).getPlace()).isEqualTo("장소 1");
        assertThat(partysRepository.findById(2).getPlace()).isEqualTo("장소 2");
    }

    @Test
    void 날짜_검색() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName("이름");
        members.add(member);

        Partys partys1 = makePartys(members, (short)2022, (short) 1);
        Partys partys2 = makePartys(members, (short)2022, (short) 2);
        Partys partys3 = makePartys(members, (short)2022, (short) 2);

        partysRepository.save(partys1);
        partysRepository.save(partys2);
        partysRepository.save(partys3);

        // when then
        assertThat(partysRepository.findByDate((short)2022,(short)1).size()).isEqualTo(1);
        assertThat(partysRepository.findByDate((short)2022,(short)2).size()).isEqualTo(2);
    }

    @Test
    void 멤버_추가() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName("이름 1");
        members.add(member);

        Partys partys = makePartys(members);
        partysRepository.save(partys);

        assertThat(partysRepository.findById(1).getMember().size()).isEqualTo(1);

        // when
        partysRepository.addMember(1, "이름 2", "1234");

        // then
        assertThat(partysRepository.findById(1).getMember().size()).isEqualTo(2);
    }

    @Test
    void 멤버_탈주() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member1 = new Member();
        Member member2 = new Member();
        member1.setName("이름 1");
        member2.setName("이름 2");
        members.add(member1);
        members.add(member2);

        Partys partys = makePartys(members);
        partysRepository.save(partys);
        assertThat(partysRepository.findById(1).getMember().size()).isEqualTo(2);

        // when
        partysRepository.delMember(1, "이름 2", "그냥ㅋ", "1234");

        // then
        assertThat(partysRepository.findById(1).getMember().size()).isEqualTo(1);
    }

    @Test
    void 파티_취소() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName("이름");
        members.add(member);

        Partys partys = makePartys(members);
        partysRepository.save(partys);

        assertThat(partysRepository.findById(1).getCancel()).isEqualTo(false);

        // when
        partysRepository.delete(1);

        // then
        assertThat(partysRepository.findById(1).getCancel()).isEqualTo(true);
    }

    @Test
    void 파티_수정() {
        // given
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName("이름");
        members.add(member);

        Partys partys = makePartys(members);
        partysRepository.save(partys);

        assertThat(partysRepository.findById(1).getPlace()).isEqualTo("나도 모르는 장소");

        // when
        partysRepository.modify(1, (short) 2022, (short) 3, (short) 1, "30:30", "빼액");

        // then
        assertThat(partysRepository.findById(1).getPlace()).isEqualTo("빼액");
    }

    Partys makePartys(List<Member> members) {
        Partys partys = new Partys();
        partys.setYear((short) 2022);
        partys.setMonth((short) 1);
        partys.setDay((short) 20);
        partys.setTime("21:58");
        partys.setPlace("나도 모르는 장소");
        partys.setCancel(false);
        partys.setMember(members);

        return partys;
    }
    Partys makePartys(List<Member> members, String place) {
        Partys partys = new Partys();
        partys.setYear((short) 2022);
        partys.setMonth((short) 1);
        partys.setDay((short) 20);
        partys.setTime("21:58");
        partys.setPlace(place);
        partys.setCancel(false);
        partys.setMember(members);

        return partys;
    }
    Partys makePartys(List<Member> members, short year, short month) {
        Partys partys = new Partys();
        partys.setYear(year);
        partys.setMonth(month);
        partys.setDay((short) 20);
        partys.setTime("21:58");
        partys.setPlace("나도 모르는 장소");
        partys.setCancel(false);
        partys.setMember(members);

        return partys;
    }
}