package com.iptime.rudnfcks.PartyGroup.repository;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface PartysRepository {
    Partys save(Partys partys);
    List<Partys> findAll();
    Partys findById(long id);
    List<Partys> findByDate(short year, short month);
    JsonPOJOBuilder addMember(long id, String name);
    JsonPOJOBuilder delMember(long id, String name, String why);
    void delParty(long id);
    Partys modifyParty(Partys partys);
}
