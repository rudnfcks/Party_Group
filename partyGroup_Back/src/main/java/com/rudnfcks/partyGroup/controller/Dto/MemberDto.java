package com.rudnfcks.partyGroup.controller.Dto;

import com.rudnfcks.partyGroup.domain.Member;
import lombok.Builder;
import lombok.Getter;

@Getter
public class MemberDto {
    private String name;
    private String secession_why;
    private String code;

    public Member toEntity() {
        Member build = Member.builder()
                .name(name)
                .secession(false)
                .secession_why(secession_why)
                .code(code)
                .build();

        return build;
    }

    @Builder
    public MemberDto(
            String name,
            String secession_why,
            String code
    ) {
        this.name = name;
        this.secession_why = secession_why;
        this.code = code;
    }

    public static MemberDto of(Member member) {
        MemberDto build = MemberDto.builder()
                .name(member.getName())
                .secession_why(member.getSecession_why())
                .code(member.getCode())
                .build();

        return build;
    }
}
