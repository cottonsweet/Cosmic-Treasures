package com.cosmic.back.dto.user;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class SaveUserRequest {
    private String loginId;
    private String password;
    private String nickname;
    private Date createdAt;
    private Date updatedAt;
    private Date deletedAt;
}
