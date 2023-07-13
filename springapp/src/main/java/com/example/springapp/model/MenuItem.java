package com.example.springapp.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class MenuItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;
    private String tags;
    @OneToOne(cascade = CascadeType.ALL)
    private Image image;
    private Long restaurantId;
    
    public MenuItem(Long id, String name, String description, double price, String tags) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.tags = tags;
    }
    

    
}

