package com.rudnfcks.partyGroup.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Member {
    private String name;
    private Boolean secession;
    private String secession_why;
    private String code;
}
