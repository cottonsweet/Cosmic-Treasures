package com.cosmic.back.Entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.NotNull;

@SuperBuilder
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="login")
public class Login {

    @Id
    private long id;

    // user_id 컬럼 정의 - 1: (0 or 1) 관계
    @NotNull
    @Column(name="logined_at")
    private Date loginedAt;

    @NotNull
    @Column(name="expired_at")
    private Date expiredAt;

    @NotNull
    @Column(name="created_at")
    private Date createdAt;
}
