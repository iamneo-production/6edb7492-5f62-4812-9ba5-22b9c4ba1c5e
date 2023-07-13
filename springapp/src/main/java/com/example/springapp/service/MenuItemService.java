package com.example.springapp.service;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.springapp.model.Image;
import com.example.springapp.model.MenuItem;
import com.example.springapp.model.Restaurant;
import com.example.springapp.repository.MenuItemRepo;
import com.example.springapp.repository.ResturantRepo;
import com.example.springapp.utilities.ImageUtil;

@Service
public class MenuItemService {

    @Autowired
    private MenuItemRepo menuItemRepo;

    @Autowired
    private ResturantRepo restaurantRepo;

    public boolean createMenuItem(MenuItem m) {
        menuItemRepo.save(m);
        return true;
    }
    
    public List<MenuItem> getAllMenuItem() {
        return menuItemRepo.findAll();
    }

    public MenuItem getMenuItemById(Long id) {
        return menuItemRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Menu Item not found with id: " + id));
    }

    @Transactional
    public MenuItem createMenu(Long restaurantId, MenuItem m, MultipartFile file) throws IOException {
        Restaurant restaurant = restaurantRepo.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        Image image = new Image();
        image.setImageData(ImageUtil.compressImage(file.getBytes()));
        image.setName(file.getOriginalFilename());
        image.setType(file.getContentType());
        m.setImage(image);
        MenuItem menuItem = menuItemRepo.save(m);
        restaurant.getRestaurantmenu().add(menuItem);
        return menuItem;
    }

    public void updateMenuItem(MenuItem m) {
        MenuItem menu  =  menuItemRepo.findById(m.getId())
                .orElseThrow(() -> new RuntimeException("Menu Item not found with id: " + m.getId()));
        menu.setId(m.getId());
        menu.setName(m.getName());
        menu.setPrice(m.getPrice());
        menu.setDescription(m.getDescription());
        menu.setTags(m.getTags());
        menuItemRepo.save(menu);
    }

    public void deleteMenuItem(Long id) {
        MenuItem menu =  menuItemRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Menu Item not found with id: " + id));
        Restaurant restaurant = restaurantRepo.findById(menu.getRestaurantId())
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        restaurant.getRestaurantmenu().remove(menu);
        menuItemRepo.deleteById(id);
    }

    
}