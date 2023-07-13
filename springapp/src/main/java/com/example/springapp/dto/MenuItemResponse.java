package com.example.springapp.dto;

import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class MenuItemResponse {

    private Long id;
    private String name;
    private String description;
    private double price;
    private String tags;
    private ResponseEntity<byte[]> image;

}