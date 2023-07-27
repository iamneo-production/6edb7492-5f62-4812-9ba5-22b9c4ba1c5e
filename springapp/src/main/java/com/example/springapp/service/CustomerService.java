package com.example.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.springapp.dto.LoginRequest;
import com.example.springapp.dto.UserChangeRequest;
import com.example.springapp.dto.UserResponse;
import com.example.springapp.model.Customer;
import com.example.springapp.repository.CustomerRepo;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepo customerRepo;

    public ResponseEntity<?> signup(Customer customer) {
        if(customerRepo.existsByEmail(customer.getEmail())) {
            String errorMessage = "Email already exists";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(customerRepo.save(customer), HttpStatus.CREATED);
        }
    }

    public ResponseEntity<?> login(LoginRequest login) {
        if(customerRepo.existsByEmail(login.getEmail())) {
            Customer customer = customerRepo.findByEmailAndPassword(login.getEmail(), login.getPassword());
            if(customer != null) {
                return new ResponseEntity<>(customer, HttpStatus.OK);
            } else {
                String errorMessage = "Invalid credentials";
                return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
            }
        } else {
            String errorMessage = "Email does not exist";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    public List<UserResponse> getAllUsers() {
        List<Customer> customers = customerRepo.findAll();
        List<UserResponse> userResponses = new ArrayList<>();
        for (Customer customer : customers) {
            UserResponse userResponse = new UserResponse();
            userResponse.setId(customer.getId());
            userResponse.setName(customer.getName());
            userResponse.setEmail(customer.getEmail());
            userResponse.setPhone(customer.getPhone());
            userResponse.setRole(customer.getRole());
            userResponses.add(userResponse);
        }
        return userResponses;
    }

    public ResponseEntity<?> updateUser(Customer customer) {
        if(customerRepo.existsById(customer.getId())) {
            return new ResponseEntity<>(customerRepo.save(customer), HttpStatus.OK);
        } else {
            String errorMessage = "User does not exist";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> deleteUser(Long id) {
        if (customerRepo.existsById(id)) {
            customerRepo.deleteById(id);
            String successMessage = "User deleted successfully";
            return new ResponseEntity<>(successMessage, HttpStatus.OK);
        } else {
            String errorMessage = "User does not exist";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    public Customer ChangeUserDetails(UserChangeRequest userChange) {
        Customer cus = customerRepo.findById(userChange.getId())
                .orElseThrow(() -> new RuntimeException("Menu Item not found with id: " + userChange.getId()));
        cus.setName(userChange.getName());
        cus.setPassword(userChange.getPassword());
        cus.setPhone(userChange.getPhone());

        return customerRepo.save(cus);
    }

    




}