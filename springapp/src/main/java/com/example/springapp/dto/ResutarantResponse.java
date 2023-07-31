package com.example.springapp.dto;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import org.springframework.http.ResponseEntity;

import com.example.springapp.model.Image;
import com.example.springapp.model.Review;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class ResutarantResponse {

    
    private Long restaurantId;
	private String restaurantName;
	private String restaurantLocation;
	private String restaurantEmail;
    @OneToMany(cascade = CascadeType.ALL)
    private List<MenuItemResponse> restaurantmenu;
    private Long restaurantContact;
    private Long userId;    
    private ResponseEntity<byte[]> image;
    private Image images;
    private List<Review> reviews;

    public ResutarantResponse(Long restaurantId, String restaurantName, String restaurantLocation,
            String restaurantEmail, Long restaurantContact, List<MenuItemResponse> restaurantmenu ,ResponseEntity<byte[]> image, Long userId, List<Review> reviews) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantLocation = restaurantLocation;
        this.restaurantEmail = restaurantEmail;
        this.restaurantContact = restaurantContact;
        this.restaurantmenu = restaurantmenu;
        this.image = image;
        this.userId = userId;
        this.reviews = reviews;
    }

   
}