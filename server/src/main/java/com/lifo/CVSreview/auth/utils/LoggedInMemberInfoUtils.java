package com.lifo.CVSreview.auth.utils;

import com.lifo.CVSreview.auth.userdetails.MemberDetailsService;
import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.repository.MemberRepository;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Map;
import java.util.Optional;

public class LoggedInMemberInfoUtils{
        private MemberRepository memberRepository;
        private MemberDetailsService memberDetailsService;

        public Long extractMemberId() {
            Map<String, Object> claims;

            try {
                claims = (Map) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            } catch (Exception e) {
                throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);
            }

            return ((Number) claims.get("memberId")).longValue();
        }

        public Member extractMember() {
            String username;

            try {
                username = SecurityContextHolder.getContext().getAuthentication().getName();
                System.out.println("로그인한 회원의 이메일 = " + username);
            } catch (Exception e) {
                throw new BusinessLogicException(ExceptionCode.AUTHENTICATION_NOT_FOUND);
            }

            Optional<Member> optionalMember = memberRepository.findByEmail(username);
            Member foundMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

            return foundMember;
        }

        public Member extractMemberDraft() {
            Long memberId = extractMemberId();
            Member member = memberRepository.findById(memberId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
            return member;
        }
}
