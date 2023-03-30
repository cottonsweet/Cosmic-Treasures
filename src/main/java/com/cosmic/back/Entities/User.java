package com.cosmic.back.Entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.util.Date;
import java.util.Set;

@SuperBuilder
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @NotNull
    @Column(name = "login_id", length = 40)
    private String loginId;

    @NotNull
    @Column(name = "password", length=200)
    private String password;

    @NotNull
    @Column(name = "nickname", length=30)
    private String nickname;

    // 1 : N 설정 - 삭제 가능
    @OneToMany
    @JoinColumn(name= "user_id")
    private Set<Capsule> capsules;

    @NotNull
    @Column(name = "created_at", updatable = false)
    private Date createdAt;
    @Column(name = "updated_at")
    private Date updatedAt;
    @Column(name = "deleted_at")
    private Date deletedAt;
}
