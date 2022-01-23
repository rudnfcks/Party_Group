package com.iptime.rudnfcks.PartyGroup.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Setter
public class Member {
    private String name;
    private Boolean secession = false;
    private String secession_why = "";
    private String code = "";
}
