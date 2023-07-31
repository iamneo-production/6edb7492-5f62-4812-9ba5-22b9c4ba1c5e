package com.example.springapp.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.springapp.dto.ResutarantResponse;
import com.example.springapp.model.Image;
import com.example.springapp.model.Restaurant;
import com.example.springapp.model.Review;
import com.example.springapp.service.RestaurantService;
import com.example.springapp.utilities.ImageUtil;

//import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping("/restaurant")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ResturantController {
    
    @Autowired
    private RestaurantService restaurantService;

    //@ApiIgnore
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Restaurant createRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.createRestaurant(restaurant);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public String createRestaurant(@RequestPart("file") MultipartFile file, @RequestParam String restaurantName,
            @RequestParam String restaurantLocation, @RequestParam Long restaurantContact,
            @RequestParam String restaurantEmail, @RequestParam Long userId, @RequestParam( value = "id", required = false ) Long id ) throws IOException {
        restaurantService.createRestaurant(file, restaurantName, restaurantLocation, restaurantContact,
                restaurantEmail, userId, id);
        return "Restaurant created";
    }

    //@ApiIgnore
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurant();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public String updateRestaurant(@RequestPart("file") MultipartFile file, @RequestParam String restaurantName,
            @RequestParam String restaurantLocation, @RequestParam Long restaurantContact,@RequestParam Long restaurantId) throws IOException {
    	ResutarantResponse rest=new ResutarantResponse();
    	rest.setRestaurantId(restaurantId);
    	rest.setRestaurantName(restaurantName);
    	rest.setRestaurantContact(restaurantContact);
    	rest.setRestaurantLocation(restaurantLocation);
    	Image image = new Image();
        image.setName(file.getOriginalFilename());
        image.setType(file.getContentType());
        image.setImageData(ImageUtil.compressImage(file.getBytes()));
        rest.setImages(image);
        restaurantService.updateRestaurant(rest);
        return "Restaurant Updated";
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<ResutarantResponse> getAllRestaurantsForUs() {
        return restaurantService.getAllRestaurantForus();
    }

    @GetMapping(params = "id")
    @ResponseStatus(HttpStatus.OK)
    public List<Restaurant> getRestaurantById(@RequestParam Long id) {
        Restaurant onerRestaurant = restaurantService.getRestaurantById(id);
        ArrayList<Restaurant> oneRestaurantList = new ArrayList<>();
        oneRestaurantList.add(onerRestaurant);
        return oneRestaurantList;
    }

    @GetMapping(params = "name")
    @ResponseStatus(HttpStatus.OK)
    public List<Restaurant> getRestaurantByName(@RequestParam String name) {
        Restaurant oneRestaurant = restaurantService.findByRestaurantName(name);
        ArrayList<Restaurant> oneRestaurantList = new ArrayList<>();
        oneRestaurantList.add(oneRestaurant);
        return oneRestaurantList;
    }

    //@ApiIgnore
    @PostMapping("/link")
    @ResponseStatus(HttpStatus.CREATED)
    public String linkRestaurant(@RequestParam Long restaurantId, @RequestParam Long menuItemId) {
        restaurantService.linkRestaurant(restaurantId, menuItemId);
        return "Restaurant linked to menu item";
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public String deleteRestaurant(@RequestParam Long id) {
        restaurantService.deleteRestaurant(id);
        return "Restaurant deleted";
    }

    @PostMapping("/review")
    @ResponseStatus(HttpStatus.CREATED)
    public String addReview(@RequestParam Long restaurantId,  @RequestBody Review review) {
        restaurantService.addReview(restaurantId, review);
        return "Review added";
    }


}