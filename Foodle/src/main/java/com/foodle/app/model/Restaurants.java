package com.foodle.app.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Restaurants {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long restaurantId;
	    private String restaurantName;
	    @OneToOne(cascade = CascadeType.ALL)
	    private Address restaurantAddress;
	    private String restaurantEmail;
	    private String restaurantPassword;
	    @OneToMany(cascade = CascadeType.ALL)
	    private List<Menu> restaurantmenu;
		public Restaurants() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Restaurants(Long restaurantId, String restaurantName, Address restaurantAddress, String restaurantEmail,
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
		public Address  getRestaurantAddress() {
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
