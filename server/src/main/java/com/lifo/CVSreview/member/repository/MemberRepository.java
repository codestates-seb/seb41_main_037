package com.lifo.CVSreview.member.repository;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.print.attribute.standard.MediaSize;
import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(long memberId);
    Optional<Member> findByEmail(String username);
}
