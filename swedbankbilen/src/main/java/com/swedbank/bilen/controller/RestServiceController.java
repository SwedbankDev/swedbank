package com.swedbank.bilen.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestServiceController {
    @GetMapping("/status")
    public String hello() {
        return "OK";
    }
}
