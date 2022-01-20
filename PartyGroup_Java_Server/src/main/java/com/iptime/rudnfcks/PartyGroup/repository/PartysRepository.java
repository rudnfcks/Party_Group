package com.iptime.rudnfcks.PartyGroup.repository;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import com.iptime.rudnfcks.PartyGroup.domain.Partys;

public interface PartysRepository {
    Long save(Partys partys);
    Partys[] findAll();
    Partys findById(long id);
    Partys[] findByDate(short year, short month);
    JsonPOJOBuilder addMember(long id, String name);
    JsonPOJOBuilder delMember(long id, String name);
    void delParty(long id);
    Partys modifyParty(Partys partys);
}
