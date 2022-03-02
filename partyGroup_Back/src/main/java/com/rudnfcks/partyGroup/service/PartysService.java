package com.rudnfcks.partyGroup.service;

import com.rudnfcks.partyGroup.controller.Dto.PartysDto;
import com.rudnfcks.partyGroup.domain.Member;
import com.rudnfcks.partyGroup.domain.Partys;
import com.rudnfcks.partyGroup.repository.PartysRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PartysService {

    private final PartysRepository partysRepository;

    @Transactional
    public Long createParty(PartysDto partysDto) {
        return partysRepository.save(partysDto.toEntity()).getId();
    }

    @Transactional
    public Optional<Partys> findOne(long id) {
        Optional<Partys> party = partysRepository.findById(id);

        return party;

    }

    @Transactional
    public List<Partys> findPartys(String date) {
        return partysRepository.findByDate(date);
    }

    @Transactional
    public Long cancelPartys(long id) {
        Optional<Partys> party = partysRepository.findById(id);

        if (party.isEmpty()) {
            return 0L;
        } else {
            party.get().updateIsCancel(true);
            return id;
        }
    }

    @Transactional
    public Long updatePartys(Long id, PartysDto partysDto) {
        Optional<Partys> party = partysRepository.findById(id);

        if (party.isEmpty()) {
            return 0L;
        } else {
            party.get().update(
                    partysDto.getDateTime(),
                    partysDto.getPlace(),
                    partysDto.getMemberCount()
            );

            return id;
        }
    }

    @Transactional
    public Long addMember(Long id, Member member) {
        Optional<Partys> party = partysRepository.findById(id);

        if (party.isEmpty()) {
            return 0L;
        } else {
            List<Member> members = party.get().getMembers();
            members.add(member);

            party.get().updateMembers(members);

            return id;
        }
    }

    @Transactional
    public Long delMember(Long id, Member member) {
        Optional<Partys> party = partysRepository.findById(id);

        if (party.isEmpty()) {
            return 0L;
        } else {
            List<Member> members = party.get().getMembers();
            members = members.stream().map((item) -> {
                if (item.getCode().equals(member.getCode())) {
                    item.setSecession(true);
                    item.setSecession_why(member.getSecession_why());
                    return item;
                } else {
                    return item;
                }
            }).collect(Collectors.toList());

            party.get().updateMembers(members);

            return id;
        }
    }
}
