package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.TestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/test")
    public String test() {
        return "test t1";
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return testService.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return testService.getAllUsers();
    }

}
