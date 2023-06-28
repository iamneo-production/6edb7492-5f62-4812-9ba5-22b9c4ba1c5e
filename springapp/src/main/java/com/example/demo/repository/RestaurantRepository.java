package com.foodle.app.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.foodle.app.model.Restaurants;

@EnableJpaRepositories
@Repository
public interface RestaurantRepository extends JpaRepository<Restaurants,Long> {
	 Restaurants findByRestaurantEmail(String restaurantEmail);
	 Restaurants findByRestaurantId(Long id);
}