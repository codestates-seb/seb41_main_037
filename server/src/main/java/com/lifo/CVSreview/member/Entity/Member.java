package com.lifo.CVSreview.member.Entity;

import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.review.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String nickname;

    @Column(nullable = false)
    private String password;

    @Column
    private Integer role;

    @Column
    private String description;

    @Column
    private Long image_name;

    @Column
    private Long image_path;

    @Column(name = "member_created_at", nullable = false)
    private LocalDateTime member_created_at = LocalDateTime.now();

//    @OneToMany
//    @JoinColumn(name = "product_id")
//    private Product product;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Review> review;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

//    @OneToMany(fetch = FetchType.LAZY)
//    private List<ZzimResponseDto> Zzims;

}
