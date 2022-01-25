package com.iptime.rudnfcks.PartyGroup.repository;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import com.iptime.rudnfcks.PartyGroup.domain.Member;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface PartysRepository {
    Partys save(Partys partys);
    List<Partys> findAll();
    Partys findById(long id);
    List<Partys> findByDate(short year, short month);
    List<Member> addMember(long id, String name, String code);
    List<Member> delMember(long id, String name, String why, String code);
    void delete(long id);
    Partys modify(long id, short year, short month, short day, String time, String place, short count);
}
