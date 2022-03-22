package com.rudnfcks.partyGroup.controller;

import com.rudnfcks.partyGroup.config.GlobalMathod;
import com.rudnfcks.partyGroup.controller.Dto.MemberDto;
import com.rudnfcks.partyGroup.controller.Dto.PartysDto;
import com.rudnfcks.partyGroup.domain.Member;
import com.rudnfcks.partyGroup.domain.Partys;
import com.rudnfcks.partyGroup.service.PartysService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/api")
public class PartysController {
    @Autowired
    private PartysService partysService;

    @PostMapping("/party") // 파티 추가
    public ResponseEntity saveParty(@RequestBody PartysDto partysDto) {
        try {
            long id = partysService.createParty(partysDto);
            return new ResponseEntity<>(id, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/partys") // 파티 조회
    public ResponseEntity findPartys(@RequestParam(value = "date", defaultValue = "2022") String date) {
        try {
            List<Partys> partys = partysService.findPartys(date);

            partys = partys.stream().map(item -> {
                List<Member> members = item.getMembers().stream().map(member -> {
                    member.setCode("");
                    return member;
                }).collect(Collectors.toList());
                item.setMembers(members);
                return item;
            }).collect(Collectors.toList());

            return new ResponseEntity<>(partys, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/member/{strId}") // 멤버 추가
    public ResponseEntity addMember(@PathVariable String strId, @RequestBody MemberDto memberDto) {
        long id = Long.parseLong(GlobalMathod.decodeBase64(strId));

        try {
            Optional<Partys> value = partysService.findOne(id);
            if (value.isEmpty()) { // DB에 값이 없다면
                return new ResponseEntity<>("존재하지 않는 ID값 입니다.", HttpStatus.NOT_FOUND);
            } else {
                long rt_id = partysService.addMember(id, memberDto.toEntity());
                return new ResponseEntity<>(rt_id, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/member/{strId}") // 멤버 취소
    public ResponseEntity delMember(@PathVariable String strId, @RequestHeader("X-Mbr-Code") String code, @RequestBody MemberDto memberDto) {
        long id = Long.parseLong(GlobalMathod.decodeBase64(strId));

        try {
            Optional<Partys> value = partysService.findOne(id);

            if (value.isEmpty()) { // DB에 값이 없다면
                return new ResponseEntity<>("존재하지 않는 ID값 입니다.", HttpStatus.NOT_FOUND);
            } else {
                List<Member> memberValue = value.get().getMembers().stream().filter(member ->
                        member.getCode().equals(code)).collect(Collectors.toList()
                );

                if (memberValue.size() == 0) { // Header에 code가 DB에 code와 다르다면
                    return new ResponseEntity<>("코드가 일치하지 않거나 존재하지 않습니다.", HttpStatus.UNAUTHORIZED);
                } else {
                    long rt_id = partysService.delMember(id, memberDto.toEntity());
                    return new ResponseEntity<>(rt_id, HttpStatus.OK);
                }
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/party/{strId}") // 파티 수정
    public ResponseEntity modifyParty(@PathVariable String strId, @RequestHeader("X-Mbr-Code") String code, @RequestBody PartysDto partysDto) {
        long id = Long.parseLong(GlobalMathod.decodeBase64(strId));

        try {
            Optional<Partys> value = partysService.findOne(id);

            if (value.isEmpty()) { // DB에 값이 없다면
                return new ResponseEntity<>("존재하지 않는 ID값 입니다.", HttpStatus.NOT_FOUND);
            } else {
                Member leader = value.get().getMembers().get(0);

                if (!(leader.getCode().equals(code))) { // Header에 code가 DB에 code와 다르다면
                    return new ResponseEntity<>("코드가 일치하지 않거나 존재하지 않습니다.", HttpStatus.UNAUTHORIZED);
                } else {
                    long rt_id = partysService.updatePartys(id, partysDto);
                    return new ResponseEntity<>(rt_id, HttpStatus.OK);
                }
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/party/{strId}") // 파티 취소
    public ResponseEntity delParty(@PathVariable String strId, @RequestHeader("X-Mbr-Code") String code) {
        long id = Long.parseLong(GlobalMathod.decodeBase64(strId));

        try {
            Optional<Partys> value = partysService.findOne(id);

            if (value.isEmpty()) { // DB에 값이 없다면
                return new ResponseEntity<>("존재하지 않는 ID값 입니다.", HttpStatus.NOT_FOUND);
            } else {
                Member leader = value.get().getMembers().get(0);

                if (!(leader.getCode().equals(code))) { // Header에 code가 DB에 code와 다르다면
                    return new ResponseEntity<>("코드가 일치하지 않거나 존재하지 않습니다.", HttpStatus.UNAUTHORIZED);
                } else {
                    long rt_id = partysService.cancelPartys(id);
                    return new ResponseEntity<>(rt_id, HttpStatus.OK);
                }
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
