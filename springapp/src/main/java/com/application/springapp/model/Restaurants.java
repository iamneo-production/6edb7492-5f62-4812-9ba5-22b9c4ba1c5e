package com.application.springapp.model;

import java.util.List;

import javax.persistence.*;

@Entity
public class Restaurants {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long restaurantId;
	    private String restaurantName;
	    private String restaurantLocation;
	    private String restaurantEmail;
	    private String restaurantPassword;
	    @OneToMany(cascade = CascadeType.ALL)
	    private List<Menu> restaurantmenu;
		public Restaurants() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Restaurants(Long restaurantId, String restaurantName, String restaurantLocation, String restaurantEmail,
				String restaurantPassword, List<Menu> restaurantmenu) {
			super();
			this.restaurantId = restaurantId;
			this.restaurantName = restaurantName;
			this.restaurantLocation = restaurantLocation;
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
		public List<Menu> getRestaurantmenu() {
			return restaurantmenu;
		}
		public void setRestaurantmenu(List<Menu> restaurantmenu) {
			this.restaurantmenu = restaurantmenu;
		}
		
		

}
