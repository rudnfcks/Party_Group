package com.iptime.rudnfcks.PartyGroup.controller;

import com.iptime.rudnfcks.PartyGroup.domain.Partys;
import com.iptime.rudnfcks.PartyGroup.service.PartysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class PartysController {
    private final PartysService partysService;

    @Autowired
    public PartysController(PartysService partysService) {
        this.partysService = partysService;
    }

    @PostMapping("/party")
    @ResponseBody
    public String addParty(PostForm form) {
        short year = form.getYear();
        short month = form.getMonth();
        short day = form.getDay();
        String time = form.getTime();
        String place = form.getPlace();
        String name = form.getName();
        String code = form.getCode();

        try {
            partysService.uploadParty(year, month, day, time, place, name, code);

            return "저장이 완료되었습니다.";
        } catch (Exception e) {
            return "저장을 하는 도중 문제가 발생되었습니다.";
        }
    }

    @GetMapping("/party")
    @ResponseBody
    public List<Partys> getPartys(
            @RequestParam(value = "year", defaultValue = "2022") short year,
            @RequestParam(value = "month", defaultValue = "1") short month
            ) {

        return partysService.findDate(year, month).stream()
                .sorted(Comparator.comparing(Partys::getDay)
                        .thenComparing(Partys::getTime))
                .collect(Collectors.toList());
    }

    @GetMapping("/manager/findAll")
    @ResponseBody
    public List<Partys> getAllPartys() {
        return partysService.findAll().stream()
                .sorted(Comparator.comparing(Partys::getYear)
                        .thenComparing(Partys::getMonth)
                        .thenComparing(Partys::getDay)
                        .thenComparing(Partys::getTime))
                .collect(Collectors.toList());
    }

    @PutMapping("/member")
    @ResponseBody
    public Partys addMember(MemberForm form) {
        partysService.addMember(form.getId(), form.getName(), form.getCode());
        return partysService.findId(form.getId());
    }

    @DeleteMapping("/member")
    @ResponseBody
    public Partys delMember(MemberForm form) {
        partysService.delMember(form.getId(), form.getName(), form.getWhy(), form.getCode());
        return partysService.findId(form.getId());
    }

    @PutMapping("/party")
    @ResponseBody
    public Partys modifyParty(PartyForm form) {
        long id = form.getId();
        short year = form.getYear();
        short month = form.getMonth();
        short day = form.getDay();
        String time = form.getTime();
        String place = form.getPlace();

        partysService.moidfyParty(id, year, month, day, time, place);

        return partysService.findId(id);
    }

    @DeleteMapping("/party")
    @ResponseBody
    public Partys deleteParty(PartyForm form) {
        partysService.deleteParty(form.getId());

        return partysService.findId(form.getId());
    }
}
