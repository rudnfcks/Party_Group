package com.rudnfcks.partyGroup.service;

import com.rudnfcks.partyGroup.controller.Dto.PartysDto;
import com.rudnfcks.partyGroup.domain.Member;
import com.rudnfcks.partyGroup.domain.Partys;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@Transactional
@SpringBootTest
class PartysServiceTest {

    @Autowired
    private PartysService partysService;

//    @Test
//    void 파티_생성() {
//        Partys partys = newParty(2022,2,27,"김찬희","0000000001");
//        PartysDto partysDto = PartysDto.of(partys);
//
//        System.out.println( partysService.createParty(partysDto) );
//    }

    @Test
    void 파티_아이디검색() {
        Partys partys = newParty(2022,2,27,"김찬희","0000000001");
        PartysDto partysDto = PartysDto.of(partys);

        long id = partysService.createParty(partysDto);

        assertThat(partysService.findOne(id).get().getId()).isEqualTo(id);
    }

    @Test
    void 파티_날짜검색() {
        Partys partys = newParty(2022,3,27,"김찬희","0000000001");
        PartysDto partysDto = PartysDto.of(partys);

        partysService.createParty(partysDto);

        assertThat(partysService.findPartys("2022-03").get(0).getDate()).isEqualTo("2022-03");
    }

    @Test
    void 파티_취소() {
        Partys partys = newParty(2022,4,27,"김찬희","0000000001");
        PartysDto partysDto = PartysDto.of(partys);

        long id = partysService.createParty(partysDto);
        partysService.cancelPartys(id);

        assertThat(partysService.findOne(id).get().isCancel()).isEqualTo(true);
    }

    @Test
    void 파티_수정() {
        Partys partys = newParty(2022,5,27,"김찬희","0000000001");
        PartysDto partysDto = PartysDto.of(partys);

        Partys modifyParty = newParty(2022,6,27,"김찬희","0000000001");
        PartysDto modifyPartysDto = PartysDto.of(modifyParty);

        long id = partysService.createParty(partysDto);
        partysService.updatePartys(id, modifyPartysDto);

        assertThat(partysService.findOne(id).get().getDate()).isEqualTo("2022-06");
    }

    @Test
    void 멤버_참여() {
        Partys partys = newParty(2022,7,27,"김찬희","0000000001");
        PartysDto partysDto = PartysDto.of(partys);

        Member member = Member.builder()
                .name("김짠희")
                .code("0000000002")
                .secession(false)
                .secession_why("")
                .build();

        long id = partysService.createParty(partysDto);
        partysService.addMember(id, member);

        assertThat(partysService.findOne(id).get().getMembers().size()).isEqualTo(2);
    }

    @Test
    void 멤버_취소() {
        Partys partys = newParty(2022,8,27,"김찬희","0000000001");
        PartysDto partysDto = PartysDto.of(partys);

        Member member = Member.builder()
                .name("김짠희")
                .code("0000000002")
                .secession(false)
                .secession_why("")
                .build();

        long id = partysService.createParty(partysDto);
        partysService.addMember(id, member);
        partysService.delMember(id, member);

        assertThat(partysService.findOne(id).get().getMembers().size()).isEqualTo(1);
    }

    private Partys newParty(int year, int month, int day, String name, String code) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM");
        Calendar cal = Calendar.getInstance();
        cal.set(year, month-1, day);

        Member member = Member.builder()
                .name(name)
                .secession(false)
                .secession_why("")
                .code(code)
                .build();

        List<Member> members = new ArrayList<>();
        members.add(member);

        Partys partys = Partys.builder()
                .id(0L)
                .dateTime(cal.getTime())
                .date(df.format(cal.getTime()))
                .place("테스트 장소")
                .memberCount(4)
                .isCancel(false)
                .members(members)
                .build();

        return partys;
    }
}