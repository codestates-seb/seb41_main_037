package com.lifo.CVSreview.favorite.repository;

import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Favorite findByMemberAndProduct(Member member, Product product);
    List<Favorite> findByMember(Member member);
}
