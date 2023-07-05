package com.example.demo.service;

import java.io.IOException;
import java.util.List;

import com.example.demo.DTO.RestaurantsDTO;
import com.example.demo.DTO.LoginDTO;


public interface RestaurantService {

	String addRestaurant(RestaurantsDTO rest);

	String loginRestaurant(LoginDTO loginDTO);

	
}
