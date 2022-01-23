package com.iptime.rudnfcks.PartyGroup.controller;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PartyForm {
    private long id;
    private short year;
    private short month;
    private short day;
    String time;
    String place;
}
