package com.example.springapp.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.springapp.dto.MenuItemResponse;
import com.example.springapp.dto.ResutarantResponse;
import com.example.springapp.model.Image;
import com.example.springapp.model.MenuItem;
import com.example.springapp.model.Restaurant;
import com.example.springapp.model.Review;
import com.example.springapp.repository.MenuItemRepo;
import com.example.springapp.repository.ResturantRepo;
import com.example.springapp.utilities.ImageUtil;

@Service
public class RestaurantService {
    
    @Autowired
    private ResturantRepo restaurantRepo;

    @Autowired
    private MenuItemRepo menuItemRepo;

    public Restaurant createRestaurant(Restaurant restaurant) {
        return restaurantRepo.save(restaurant);
    }

    // ignore this method for testCase passing without Image
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepo.findAll();
    }
 
    public List<ResutarantResponse> getAllRestaurantForus() {

        // decompressing restaurant images
        List<Restaurant> restaurant = restaurantRepo.findAll();
        List<ResutarantResponse> restaurantList = new ArrayList<>();
        for (Restaurant res : restaurant) {
            byte[] image = null;
            if (res.getImage() != null && res.getImage().getImageData() != null) {
                image = ImageUtil.decompressImage(res.getImage().getImageData());
            }
            ResponseEntity<byte[]> img = ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.valueOf("image/png")).body(image);

            // decompressing dishes images 
            List<MenuItem> menus = res.getRestaurantmenu();
            List<MenuItemResponse> menuList = new ArrayList<>();
            if(menus != null) {
                for (MenuItem menu : menus) {
                    byte[] image1 = null;
                    if (menu.getImage() != null) {
                        image1 = ImageUtil.decompressImage(menu.getImage().getImageData());
                    }
                ResponseEntity<byte[]> img1 = ResponseEntity.status(HttpStatus.OK)
                        .contentType(MediaType.valueOf("image/png")).body(image1);
                menuList.add(new MenuItemResponse(menu.getId(), menu.getName(),menu.getDescription(), menu.getPrice(),menu.getTags(),img1));
                }
            }
            restaurantList.add(
                    new ResutarantResponse(res.getRestaurantId(), res.getRestaurantName(), res.getRestaurantLocation(),
                            res.getRestaurantEmail(), res.getRestaurantContact(), menuList, img, res.getUserId(), res.getReviews()  ));
        }
        return restaurantList;
    }

    public Restaurant getRestaurantById(Long restaurantId) {
        return restaurantRepo.findById(restaurantId)
            .orElseThrow(() -> new RuntimeException("Restaurant not found"));
    }

    public Restaurant findByRestaurantName(String restaurantName) {
        return restaurantRepo.findByRestaurantName(restaurantName)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
    }

    @Transactional
    public void linkRestaurant(Long restaurantId, Long menuItemId) {
        Restaurant restaurant = restaurantRepo.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        System.out.println("Restaurant: " + restaurant);
        MenuItem menuItem = menuItemRepo.findById(menuItemId)
                .orElseThrow(() -> new RuntimeException("Menu Item not found"));
        System.out.println("Menu Item: " + menuItem);
        System.out.println("Restaurant Menu: " + restaurant.getRestaurantmenu());
        restaurant.getRestaurantmenu().add(menuItem);
        }

    public void createRestaurant(MultipartFile file, String restaurantName, String restaurantLocation,
            Long restaurantContact, String restaurantEmail, Long userId, Long id ) throws IOException {
        Image image = new Image();
        image.setName(file.getOriginalFilename());
        image.setType(file.getContentType());
        image.setImageData(ImageUtil.compressImage(file.getBytes()));
        Restaurant restaurant = new Restaurant();
        restaurant.setRestaurantName(restaurantName);
        restaurant.setRestaurantLocation(restaurantLocation);
        restaurant.setRestaurantContact(restaurantContact);
        restaurant.setRestaurantEmail(restaurantEmail);
        restaurant.setImage(image);
        restaurant.setUserId(userId);
        if (id != null) {
            restaurant.setRestaurantId(id);
        }
        restaurantRepo.save(restaurant);
    }

    public void updateRestaurant(Restaurant restaurant) {
        Restaurant restaurant1 = restaurantRepo.findById(restaurant.getRestaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        restaurant1.setRestaurantId(restaurant.getRestaurantId());
        restaurant1.setRestaurantName(restaurant.getRestaurantName());
        restaurant1.setRestaurantLocation(restaurant.getRestaurantLocation());
        restaurant1.setRestaurantContact(restaurant.getRestaurantContact());
        restaurant1.setRestaurantEmail(restaurant.getRestaurantEmail());
        restaurant1.setImage(restaurant1.getImage());
        restaurantRepo.save(restaurant1);
    }

    public void deleteRestaurant(Long id) {
        restaurantRepo.deleteById(id);
    }

    @Transactional
    public void addReview(Long restaurantId, Review review) {
        Restaurant restaurant = restaurantRepo.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        Review review1 = new Review();
        review1.setName(review.getName());
        review1.setReview(review.getReview());
        review1.setRating(review.getRating());
        review1.setResponse(null);
        restaurant.getReviews().add(review1);
        restaurantRepo.save(restaurant);
    }
        
}