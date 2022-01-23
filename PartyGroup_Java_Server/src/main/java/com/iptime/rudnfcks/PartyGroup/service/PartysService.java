package com.iptime.rudnfcks.PartyGroup.service;

import com.iptime.rudnfcks.PartyGroup.domain.Member;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import com.iptime.rudnfcks.PartyGroup.repository.PartysRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Transactional
public class PartysService {
    private final PartysRepository partysRepository;

    public Partys uploadParty(short year, short month, short day, String time, String place, String name, String code) {
        List<Member> members = new ArrayList<Member>();
        Member member = new Member();
        member.setName(name);
        member.setCode(code);
        members.add(member);

        Partys partys = new Partys();
        partys.setYear(year);
        partys.setMonth(month);
        partys.setDay(day);
        partys.setTime(time);
        partys.setPlace(place);
        partys.setCancel(false);
        partys.setMember(members);

        return partysRepository.save(partys);
    }

    public List<Partys> findAll() {
        return partysRepository.findAll();
    }

    public Partys findId(long id) {
        return partysRepository.findById(id);
    }

    public List<Partys> findDate(short year, short month) {
        return partysRepository.findByDate(year, month);
    }

    public int addMember(long id, String name, String code) {
        List<Member> members = partysRepository.addMember(id, name, code);

        return members.size();
    }

    public int delMember(long id, String name, String why, String code) {
        List<Member> members = partysRepository.delMember(id, name, why, code);

        return members.size();
    }

    public void deleteParty(long id) {
        partysRepository.delete(id);
    }

    public Partys moidfyParty(long id, short year, short month, short day, String time, String place) {
        return partysRepository.modify(id, year, month, day, time, place);
    }
}
