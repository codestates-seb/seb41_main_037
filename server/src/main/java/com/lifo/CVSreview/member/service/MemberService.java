package com.lifo.CVSreview.member.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.member.Entity.MemberEntity;
import com.lifo.CVSreview.member.repository.MemberRepository;
import com.lifo.CVSreview.review.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }

    public MemberEntity createMember(MemberEntity memberEntity){
        return memberRepository.save(memberEntity);
    }
    public MemberEntity updateMember(MemberEntity memberEntity){
        MemberEntity findMember = findVerifiedMember(memberEntity.getMemberId());

        Optional.ofNullable(memberEntity.getMemberId())
                .ifPresent(MemberId ->findMember.setMemberId(MemberId));
        Optional.ofNullable(memberEntity.getEmail())
                .ifPresent(email -> findMember.setEmail(email));
        Optional.ofNullable(memberEntity.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        Optional.ofNullable(memberEntity.getNickname())
                .ifPresent(nickname -> findMember.setNickname(nickname));
        Optional.ofNullable(memberEntity.getImage_name())
                .ifPresent(image_name -> findMember.setImage_name(image_name));
        Optional.ofNullable(memberEntity.getImage_path())
                .ifPresent(image_path -> findMember.setImage_path(image_path));
        return memberRepository.save(findMember);
    }

    public MemberEntity findMember(Long memberId) {
        return findVerifiedMember(memberId);
    }

    public Page<MemberEntity> findMembers(int page, int size) {
        return memberRepository.findAll(PageRequest.of(page, size,
                Sort.by("memberId").descending()));
    }

    public MemberEntity findVerifiedMember(Long memberId) {
        Optional<MemberEntity> optionalMember = memberRepository.findById(memberId);
        MemberEntity verifiedMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return verifiedMember;
    }
    public void deleteMember(long memberId){
        MemberEntity findMember = findVerifiedMember(memberId);
        memberRepository.delete(findMember);
    }
}
