package com.lifo.CVSreview.member.Entity;

import com.lifo.CVSreview.favorite.entity.Favorite;
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
    private String image_name;

    @Column(nullable = true, length = 999999999)
    private String image_path;

    @Column(name = "member_created_at", nullable = false)
    private LocalDateTime member_created_at = LocalDateTime.now();


    @OneToMany(mappedBy = "member",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.ALL})
    private List<Review> review;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.ALL})
    private List<Favorite> favorite;

}
