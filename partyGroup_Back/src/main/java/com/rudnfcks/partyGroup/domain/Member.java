package com.rudnfcks.partyGroup.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode
@Getter @Setter
public class Member {
    private String name;
    private Boolean secession;
    private String secession_why;
    private String code;

    @Builder
    public Member(
            String name,
            Boolean secession,
            String secession_why,
            String code
    ){
        this.name = name;
        this.secession = secession;
        this.secession_why = secession_why;
        this.code = code;
    }
}
