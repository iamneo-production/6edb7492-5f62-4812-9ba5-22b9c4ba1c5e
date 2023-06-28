package com.example.demo.DTO;

import java.util.List;

import com.example.demo.model.Menu;

public class RestaurantsDTO {
	private Long restaurantId;
    private String restaurantName;
    private String restaurantLocation;
    private String restaurantEmail;
    private String restaurantPassword;
	public RestaurantsDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RestaurantsDTO(Long restaurantId, String restaurantName, String restaurantLocation, String restaurantEmail,
			String restaurantPassword) {
		super();
		this.restaurantId = restaurantId;
		this.restaurantName = restaurantName;
		this.restaurantLocation = restaurantLocation;
		this.restaurantEmail = restaurantEmail;
		this.restaurantPassword = restaurantPassword;
	}
	public Long getRestaurantId() {
		return restaurantId;
	}
	public void setRestaurantId(Long restaurantId) {
		this.restaurantId = restaurantId;
	}
	public String getRestaurantName() {
		return restaurantName;
	}
	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}
	public String getRestaurantLocation() {
		return restaurantLocation;
	}
	public void setRestaurantLocation(String restaurantLocation) {
		this.restaurantLocation = restaurantLocation;
	}
	public String getRestaurantEmail() {
		return restaurantEmail;
	}
	public void setRestaurantEmail(String restaurantEmail) {
		this.restaurantEmail = restaurantEmail;
	}
	public String getRestaurantPassword() {
		return restaurantPassword;
	}
	public void setRestaurantPassword(String restaurantPassword) {
		this.restaurantPassword = restaurantPassword;
	}
}
