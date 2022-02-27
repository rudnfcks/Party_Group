package com.rudnfcks.partyGroup.controller.Dto;

import com.rudnfcks.partyGroup.domain.Member;
import com.rudnfcks.partyGroup.domain.Partys;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.List;

@Getter
public class PartysDto {
    private Long id;
    private Date dateTime;
    private String date;
    private String place;
    private int memberCount;
    private boolean isCancel;
    private List<Member> members;

    public Partys toEntity() {
        Partys build = Partys.builder()
                .id(id)
                .dateTime(dateTime)
                .date(date)
                .place(place)
                .memberCount(memberCount)
                .isCancel(isCancel)
                .members(members)
                .build();

        return build;
    }

    @Builder
    public PartysDto(
            Long id,
            Date dateTime,
            String date,
            String place,
            int memberCount,
            boolean isCancel,
            List<Member> members
    ) {
        this.id = id;
        this.dateTime = dateTime;
        this.date = date;
        this.place = place;
        this.memberCount = memberCount;
        this.isCancel = isCancel;
        this.members = members;
    }

    public static PartysDto of(Partys partys) {
        PartysDto build = PartysDto.builder()
                .id(partys.getId())
                .dateTime(partys.getDateTime())
                .date(partys.getDate())
                .place(partys.getPlace())
                .memberCount(partys.getMemberCount())
                .isCancel(partys.isCancel())
                .members(partys.getMembers())
                .build();

        return build;
    }
}
