package com.lifo.CVSreview.review.entity;

import com.lifo.CVSreview.audit.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Review extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reviewId;

    @Column(length = 500, nullable = false, updatable = true, unique = false)
    private String content;

    @Column(nullable = false, updatable = true, unique = false)
    private int rating ;

    /*@OneToMany(mappedBy = "member")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Comment> comments = new ArrayList<>();*/
}