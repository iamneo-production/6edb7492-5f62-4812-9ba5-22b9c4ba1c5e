package com.example.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Restaurant;

public interface ResturantRepo extends JpaRepository<Restaurant, Long> {
    
    Optional<Restaurant> findByRestaurantName(String restaurantName);
}