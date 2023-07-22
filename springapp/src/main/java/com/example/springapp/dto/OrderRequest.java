package com.example.springapp.dto;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

import com.example.springapp.model.MenuItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class OrderRequest {

    private int customerId;
    private String customerName;
    @OneToMany( cascade = CascadeType.ALL )
    private List<MenuItem> items;
    private double totalCost;
    private String deliveryAddress;
    private String status;
    
}