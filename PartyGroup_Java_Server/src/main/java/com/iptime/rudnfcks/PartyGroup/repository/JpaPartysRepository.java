package com.iptime.rudnfcks.PartyGroup.repository;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import com.iptime.rudnfcks.PartyGroup.domain.Member;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class JpaPartysRepository implements PartysRepository {

    private final EntityManager em;

    @Override
    public Partys save(Partys partys) {
        em.persist(partys);
        return partys;
    }

    @Override
    public List<Partys> findAll() {
        return em.createQuery("select p from Partys p")
                .getResultList();
    }

    @Override
    public Partys findById(long id) {
        return em.find(Partys.class, id);
    }

    @Override
    public List<Partys> findByDate(short year, short month) {
        return em.createQuery("select p from Partys p where p.year = :year and p.month = :month")
                .setParameter("year", year)
                .setParameter("month", month)
                .getResultList();
    }

    @Override
    public List<Member> addMember(long id, String name, String code) {
        Partys partys = findById(id);

        List<Member> members = partys.getMember();
        Member member = new Member();
        member.setName(name);
        member.setCode(code);
        members.add(member);
        partys.setMember(members);
        System.out.println(members);

        em.merge(partys);

        return members;
    }

    @Override
    public List<Member> delMember(long id, String name, String why, String code) {
        Partys partys = findById(id);

        List<Member> members = partys.getMember();
        members = members.stream().map(m -> {
            if(m.getCode().equals(code) && m.getName().equals(name)) {
                m.setSecession(true);
                m.setSecession_why(why);
            }
            return m;
        })
                        .collect(Collectors.toList());

        partys.setMember(members);

        em.merge(partys);

        return members;
    }

    @Override
    public void delete(long id) {
        Partys partys = findById(id);
        partys.setCancel(true);

        em.merge(partys);
    }

    @Override
    public Partys modify(long id, short year, short month, short day, String time, String place, short count) {
        Partys partys = findById(id);

        partys.setYear(year);
        partys.setMonth(month);
        partys.setDay(day);
        partys.setTime(time);
        partys.setPlace(place);
        partys.setCount(count);

        em.merge(partys);

        return partys;
    }
}
