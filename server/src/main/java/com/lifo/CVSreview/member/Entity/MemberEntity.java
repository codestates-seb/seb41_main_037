package com.lifo.CVSreview.member.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.type.StringNVarcharType;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberEntity {

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



}
