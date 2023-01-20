package com.lifo.CVSreview.member.repository;

import com.lifo.CVSreview.member.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(long memberId);
    Optional<Member> findByEmail(String username);
}
