package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.MenuItem;

public interface MenuItemRepo extends JpaRepository<MenuItem, Long> {
    
}