package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TestService {

    private final TestRepository testRepository;

    public User saveUser(User user) {
        return testRepository.save(user);
    }

    public List<User> getAllUsers() {
        return testRepository.findAll();
    }

}
