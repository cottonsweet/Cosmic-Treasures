package com.cosmic.back.controllers;

import com.cosmic.back.dto.user.SaveUserRequest;
import com.cosmic.back.service.user.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class userController {

    private final UserService userService;

    public userController(UserService userService) { this.userService = userService; }

    @PostMapping("/api/save-user")
    public void saveUser(@RequestBody SaveUserRequest req) {
        userService.saveUser(req);
    }
}
