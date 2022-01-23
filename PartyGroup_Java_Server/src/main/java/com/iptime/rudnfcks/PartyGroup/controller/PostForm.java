package com.iptime.rudnfcks.PartyGroup.controller;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class PostForm {
    private short year;
    private short month;
    private short day;
    private String time;
    private String place;
    private String name;
    private String code;
}
