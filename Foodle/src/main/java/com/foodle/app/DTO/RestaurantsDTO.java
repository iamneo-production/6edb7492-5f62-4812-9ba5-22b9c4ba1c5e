package com.foodle.app.DTO;

import java.util.List;

import com.foodle.app.model.Address;
import com.foodle.app.model.Menu;
;

public class RestaurantsDTO {
	private Long restaurantId;
    private String restaurantName;
    private Address restaurantAddress;
    private String restaurantEmail;
    private String restaurantPassword;
    private List<Menu> restaurantmenu;
	public RestaurantsDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public RestaurantsDTO(Long restaurantId, String restaurantName, Address restaurantAddress, String restaurantEmail,
			String restaurantPassword, List<Menu> restaurantmenu) {
		super();
		this.restaurantId = restaurantId;
		this.restaurantName = restaurantName;
		this.restaurantAddress = restaurantAddress;
		this.restaurantEmail = restaurantEmail;
		this.restaurantPassword = restaurantPassword;
		this.restaurantmenu = restaurantmenu;
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
	public Address getRestaurantAddress() {
		return restaurantAddress;
	}
	public void setRestaurantAddress(Address restaurantAddress) {
		this.restaurantAddress = restaurantAddress;
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
	public List<Menu> getRestaurantmenu() {
		return restaurantmenu;
	}
	public void setRestaurantmenu(List<Menu> restaurantmenu) {
		this.restaurantmenu = restaurantmenu;
	}
}
