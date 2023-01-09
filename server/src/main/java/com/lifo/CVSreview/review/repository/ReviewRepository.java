package com.lifo.CVSreview.review.repository;

import com.lifo.CVSreview.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    Optional<Review> findById(int reviewId);
    List<Review> findByproductId(int productId);
}
