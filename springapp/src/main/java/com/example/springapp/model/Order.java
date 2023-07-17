package com.example.springapp.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "orders")
@Data @AllArgsConstructor @NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int customerId;
    private String customerName;

    @OneToMany(cascade = CascadeType.ALL)
    private List<MenuItem> items;

    private double totalCost;
    private String deliveryAddress;
    private Date deliveryTime;

    // pass tc
    private Long restaurantId;
    private Long deliveryExecutiveId;
    private Long paymentId;
    public Order(Long id, Long restaurantId, Long deliveryExecutiveId, Long paymentId, double totalCost, String customerName,  Date deliveryTime, String deliveryAddress
           ) {
        this.id = id;
        this.customerName = customerName;
        this.totalCost = totalCost;
        this.deliveryAddress = deliveryAddress;
        this.deliveryTime = deliveryTime;
        this.restaurantId = restaurantId;
        this.deliveryExecutiveId = deliveryExecutiveId;
        this.paymentId = paymentId;
    }

    
}