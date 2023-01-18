package com.lifo.CVSreview.review.repository;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.review.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findById(long reviewId);
    List<Review> findByproductOrderByCreatedAtDesc(Product product);
    //Page<Review> findByproduct(Product product, Pageable pageable);
    List<Review> findByMember(Member member);
    List<Review> findBycontentContaining(String search);
}
