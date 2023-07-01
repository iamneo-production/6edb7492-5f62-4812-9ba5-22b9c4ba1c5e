package com.example.demo.controller;

import com.example.demo.DTO.RestaurantsDTO;
import com.example.demo.DTO.LoginDTO;

import com.example.demo.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin

public class AppController {
    
    @Autowired
    private RestaurantService restaurantService;
    
    @PostMapping("/restaurantregistration")
    public String addRestaurant(@RequestBody RestaurantsDTO rest){
        String msg=restaurantService.addRestaurant(rest);
        return msg;
    }

    @PostMapping("/restaurantlogin")
	public String loginRestaurant(@RequestBody LoginDTO loginDTO)
	{
		String id=restaurantService.loginRestaurant(loginDTO);
		return id;
	}
}
