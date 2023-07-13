package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.dto.LoginRequest;
import com.example.springapp.dto.UserChangeRequest;
import com.example.springapp.dto.UserResponse;
import com.example.springapp.model.Customer;
import com.example.springapp.service.CustomerService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {
    
    @Autowired
    private CustomerService customerService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> signup(@RequestBody Customer customer) {
        return customerService.signup(customer);
    }

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> login(@RequestBody LoginRequest login) {
        return customerService.login(login);
    }

    @GetMapping("/users")
    @ResponseStatus(HttpStatus.OK)
    public List<UserResponse> getAllUsers() {
        return customerService.getAllUsers();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> updateUser(@RequestBody Customer customer) {
        return customerService.updateUser(customer);
    }
    
    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> deleteUser(@RequestParam Long id) {
        return customerService.deleteUser(id);
    }

    @PutMapping("/user")
    @ResponseStatus(HttpStatus.OK)
    public Customer changeUser(@RequestBody UserChangeRequest userChange) {
        return customerService.ChangeUserDetails(userChange);
        
    }

}