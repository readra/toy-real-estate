package com.toy.realestate.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class MainViewController {
    @RequestMapping("/api/apartment")
    public List<String> apartmentList() {
        return Arrays.asList("강서구", "강동구");
    }
}
