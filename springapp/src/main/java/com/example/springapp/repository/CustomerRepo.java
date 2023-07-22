
package com.example.springapp.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
   
    Customer findByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email);
}