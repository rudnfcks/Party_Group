package com.iptime.rudnfcks.PartyGroup.domain;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;

@Entity
@Getter @Setter
@TypeDef(name="jsonb", typeClass = JsonBinaryType.class)
public class Partys {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "year")
    private Short year;

    @Column(name = "month")
    private Short month;

    @Column(name = "day")
    private Short day;

    @Column(name = "time")
    private String time;

    @Column(name = "place")
    private String place;

    @Column(name = "cancel")
    private Boolean cancel;

    @Type(type = "jsonb")
    @Column(name = "member", columnDefinition = "jsonb")
    private JsonPOJOBuilder member;
}
