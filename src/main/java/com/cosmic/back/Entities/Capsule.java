package com.cosmic.back.Entities;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.util.Date;

@SuperBuilder
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="capsule")
public class Capsule {
    @Id
    private long id;

    @NotNull
    @Column(name="title",length = 50)
    private String title;
    @NotNull
    @Column(name="content")
    private String content;

    @Column(name="send_at")
    private Date sendAt;
    @Column(name="opened_at")
    private Date openedAt;

    @Column(name = "read_at")
    private Date readAt;

    @NotNull
    @Column(name="created_at", updatable = false)
    private Date createdAt;

    @Column(name="updated_at")
    private Date updatedAt;
}
