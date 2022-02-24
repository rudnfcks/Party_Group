package com.rudnfcks.partyGroup.domain;

import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter @Setter
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
@Table(name = "partys")
public class Partys extends TimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_time", nullable = false)
    private Date dateTime;

    @Column(name = "date", nullable = false)
    private String date; // yyyy-MM

    @Column(name = "place", nullable = false)
    private String place;

    @Column(name = "member_count", nullable = false)
    private int memberCount;

    @Column(name = "is_cancel")
    private boolean isCancel;

    @Type(type = "jsonb")
    @Column(name = "members", columnDefinition = "jsonb")
    private List<Member> members;

    @Builder
    public Partys (
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

    public void update(Date dateTime, String place, int memberCount) {
        this.dateTime = dateTime;
        this.date = dateTimeToDate(dateTime);
        this.place = place;
        this.memberCount = memberCount;
    }

    public void updateMembers(List<Member> members) {
        this.members = members;
    }

    public void updateIsCancel(boolean isCancel) {
        this.isCancel = isCancel;
    }

    public static String dateTimeToDate(Date dateTime) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        return df.format(dateTime);
    }
}
