package com.lifo.CVSreview.member.repository;

import com.lifo.CVSreview.member.Entity.MemberEntity;
import com.lifo.CVSreview.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.lang.reflect.Member;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    Optional<Member> findById(int memberId);

}
