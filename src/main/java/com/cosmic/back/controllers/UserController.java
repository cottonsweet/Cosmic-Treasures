package com.cosmic.back.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "User APIs", description = "유저관련 기능 컨트롤러")
public class UserController {
    @Operation(summary = "sign up new User", description = "Sign In User : 유저 회원 가입 기능", tags = { "sing in" })
    @GetMapping("/user/signIn")
    public String SignIn(){

        return "Hello by controller hehe";
    }

    @Operation(summary = "유저 자기 자신 업데이트", description = "update User Info : 유저 정보 수정", tags = {"update", "user", "user info"})
    @PostMapping("/user/update")
    public String Update() {
        
        return "userUpdate success";
    }
}
