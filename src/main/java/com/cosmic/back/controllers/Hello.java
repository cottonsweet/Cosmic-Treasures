package com.cosmic.back.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "controller hello", description = "단순하게 hello를 해주는 임시용 컨트롤러")
public class Hello {
    @Operation(summary = "bear eat method", description = "bear eat method description", tags = { "contact" })
    @GetMapping("/test")
    public String test(){
        return "Hello by controller";
    }
}
