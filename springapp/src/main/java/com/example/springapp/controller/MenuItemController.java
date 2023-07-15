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

import com.example.springapp.model.MenuItem;
import com.example.springapp.service.MenuItemService;

import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping("/menu-item")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MenuItemController {
    
    @Autowired
    private MenuItemService menuItemService;

    @ApiIgnore
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String createMenuItem(@RequestBody MenuItem m) {
        menuItemService.createMenuItem(m);
        return "Menu Item Created";
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public MenuItem createMenu(@RequestPart("file") MultipartFile file ,@RequestParam Long restaurantId, @RequestParam String name,
            @RequestParam String description, @RequestParam Double price, @RequestParam String tags)
            throws IOException {
        MenuItem m = new MenuItem();
        m.setName(name);
        m.setDescription(description);
        m.setPrice(price);
        m.setTags(tags);
        m.setRestaurantId(restaurantId);
        return menuItemService.createMenu(restaurantId, m, file);
    }
    
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public String updateMenuItem(@RequestBody MenuItem m) {
        menuItemService.updateMenuItem(m);
        return "Menu Item Updated";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<MenuItem> getAllMenuItem() {
        return menuItemService.getAllMenuItem();
    }

    @GetMapping(params = "id")
    @ResponseStatus(HttpStatus.OK)
    public List<MenuItem> getMenuItemById(@RequestParam String id) {
        long itemId = Long.parseLong(id.replaceAll("[^0-9]", ""));
        MenuItem item = menuItemService.getMenuItemById(itemId);
        List<MenuItem> items = new ArrayList<>();
        items.add(item);
        return items;
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public String deleteMenuItem(@RequestParam Long menuId ) {
        menuItemService.deleteMenuItem(menuId);
        return "Menu Item Deleted";
    }

    
}