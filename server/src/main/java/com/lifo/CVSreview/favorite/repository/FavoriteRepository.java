package com.lifo.CVSreview.favorite.repository;

import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Favorite findByMemberAndProduct(Member member, Product product);
    List<Favorite> findByMember(Member member);

    @Query(value = "select product_id from (select product_id, count(*) as cnt " +
            "from favorite " +
            "where ni_rg_dt > :before7Days  " +
            "group by product_id " +
            "order by cnt desc ) as a", nativeQuery = true)
    List<Long> findFavorites(@Param("before7Days") LocalDateTime before7Days);

    @Query(value = "select * from favorite", nativeQuery = true)
    List<Favorite> findAllFavorites();
}
