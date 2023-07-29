package com.example.springapp.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data  
public class Restaurant {
       
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long restaurantId;
	private String restaurantName;
	private String restaurantLocation;
	private String restaurantEmail;
        @OneToMany(cascade = CascadeType.ALL)
        private List<MenuItem> restaurantmenu;
        private Long restaurantContact;
        @OneToOne(cascade = CascadeType.ALL)
        private Image image;
        private Long userId;

        @OneToMany(cascade = CascadeType.ALL)
        private List<Review> reviews;    
        
        public Restaurant(Long restaurantId, String restaurantName, String restaurantLocation, Long restaurantContact) {
                this.restaurantId = restaurantId;
                this.restaurantName = restaurantName;
                this.restaurantLocation = restaurantLocation;
                this.restaurantContact = restaurantContact;
        }

        public Restaurant() {
        }

        public Restaurant(Long restaurantId, String restaurantName, String restaurantLocation, String restaurantEmail,
                        List<MenuItem> restaurantmenu, Long restaurantContact) {
                this.restaurantId = restaurantId;
                this.restaurantName = restaurantName;
                this.restaurantLocation = restaurantLocation;
                this.restaurantEmail = restaurantEmail;
                this.restaurantmenu = restaurantmenu;
                this.restaurantContact = restaurantContact;
        }

        public Restaurant(Long restaurantId, String restaurantName, String restaurantLocation, String restaurantEmail,
                        Long restaurantContact) {
                this.restaurantId = restaurantId;
                this.restaurantName = restaurantName;
                this.restaurantLocation = restaurantLocation;
                this.restaurantEmail = restaurantEmail;
                this.restaurantContact = restaurantContact;
        }

        public Restaurant(Long restaurantId, String restaurantName, String restaurantLocation, String restaurantEmail,
                        Long restaurantContact, Image image) {
                this.restaurantId = restaurantId;
                this.restaurantName = restaurantName;
                this.restaurantLocation = restaurantLocation;
                this.restaurantEmail = restaurantEmail;
                this.restaurantContact = restaurantContact;
                this.image = image;
        }

        
        

        

        
}