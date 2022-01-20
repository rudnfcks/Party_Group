package com.iptime.rudnfcks.PartyGroup.repository;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class JpaPartysRepository implements PartysRepository {

    private final EntityManager em;

    @Override
    public Partys save(Partys partys) {
        em.persist(partys);
        return partys;
    }

    @Override
    public List<Partys> findAll() {
        return em.createQuery("select p from Partys p").getResultList();
    }

    @Override
    public Partys findById(long id) {
        return em.find(Partys.class, id);
    }

    @Override
    public List<Partys> findByDate(short year, short month) {
        return em.createQuery("select p from partys p where p.year = :year and p.month = :month")
                .setParameter("year", year)
                .setParameter("month", month)
                .getResultList();
    }

    @Override
    public JsonPOJOBuilder addMember(long id, String name) {
        return null;
    }

    @Override
    public JsonPOJOBuilder delMember(long id, String name, String why) {
        return null;
    }

    @Override
    public void delParty(long id) {

    }

    @Override
    public Partys modifyParty(Partys partys) {
        return null;
    }
}
