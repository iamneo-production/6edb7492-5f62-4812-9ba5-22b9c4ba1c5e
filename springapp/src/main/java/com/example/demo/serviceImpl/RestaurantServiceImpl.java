package com.example.demo.serviceImpl;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.DTO.RestaurantsDTO;
import com.example.demo.DTO.LoginDTO;
import com.example.demo.model.Restaurants;
import com.example.demo.repository.RestaurantRepository;
import com.example.demo.service.RestaurantService;


@Service
public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	private RestaurantRepository restaurantRepository;
	

	@Override
	public String loginRestaurant(LoginDTO loginDTO) {
        Restaurants rest = restaurantRepository.findByRestaurantEmail(loginDTO.getEmail());
        if(rest == null)
        {
        	return "Login Failed : Enter your credentials carefully!";
        }
        else
        {
        	if(rest.getRestaurantPassword().equals(loginDTO.getPassword()))
        	{
        		System.out.println("sdfjkzsgkgzsdjkghfjkzshfjklhzjklshfjkhzjkshfjhsf;jlashflkaslkfhs"+rest.getRestaurantId());
        		return rest.getRestaurantId()+"";
        	}
        	else
        	{
        		return "Login Failed : Enter your credentials carefully!";
        	}
        }
	}

	@Override
	public String addRestaurant(RestaurantsDTO rest) {
		Restaurants restaurant=restaurantRepository.findByRestaurantEmail(rest.getRestaurantEmail());
		if(restaurant!=null&&restaurant.getRestaurantEmail().equals(rest.getRestaurantEmail()))
		{
			return "Email Exists";
		}
		else
		{
			Restaurants restaurants=new Restaurants(rest.getRestaurantId(),rest.getRestaurantName(),rest.getRestaurantLocation(),rest.getRestaurantEmail(),rest.getRestaurantPassword());
			restaurantRepository.save(restaurants);
			return restaurants.getRestaurantId()+"";
		}
//		else
//		{
//		Employee employee=new Employee(employeeDTO.getEmp_id(),employeeDTO.getEmp_name(),employeeDTO.getEmp_mobno(),employeeDTO.getEmp_email(),employeeDTO.getEmp_password(),employeeDTO.getEmp_country(),employeeDTO.getEmp_state(),employeeDTO.getEmp_district(),employeeDTO.getEmp_shift(),employeeDTO.getEmp_licsno());
//		employeeRepository.save(employee);
//		return rest.getId();
	}

	
}
