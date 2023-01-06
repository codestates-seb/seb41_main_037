package com.lifo.CVSreview.review.repository;

import com.lifo.CVSreview.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface ReviewRepository extends PagingAndSortingRepository<Review, Integer> {
    Optional<Review> findById(int reviewId);
}
