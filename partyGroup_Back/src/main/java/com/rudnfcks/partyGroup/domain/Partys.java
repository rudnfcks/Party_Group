package com.rudnfcks.partyGroup.domain;

import com.rudnfcks.partyGroup.controller.Dto.PartysDto;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Entity
@Getter @Setter
@EqualsAndHashCode
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
@Table(name = "partys")
@SequenceGenerator(
        name = "PG_SEQ_GENERATOR",
        sequenceName = "PG_SEQ",
        initialValue = 10000000,
        allocationSize = 1
)
public class Partys extends TimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE,
                        generator = "PG_SEQ_GENERATOR")
    private Long id;

    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;

    @Column(name = "date", nullable = false)
    private String date; // yyyy

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
        LocalDateTime dateTime,
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

    public void update(PartysDto partysDto) {
        this.dateTime = partysDto.getDateTime();
        this.date = dateTimeToDate(partysDto.getDateTime());
        this.place = partysDto.getPlace();
        this.memberCount = partysDto.getMemberCount();
    }

    public void updateMembers(List<Member> members) {
        this.members = members;
    }

    public void updateIsCancel(boolean isCancel) {
        this.isCancel = isCancel;
    }

    public static String dateTimeToDate(LocalDateTime dateTime) {
        return dateTime.format(DateTimeFormatter.ofPattern("yyyy"));
    }
}
