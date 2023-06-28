package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.example.demo.model.Restaurants;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurants,Long> {
	 Restaurants findByRestaurantEmail(String restaurantEmail);
	 Restaurants findByRestaurantId(Long id);
}