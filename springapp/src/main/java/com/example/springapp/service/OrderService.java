package com.example.springapp.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.dto.OrderRequest;
import com.example.springapp.model.Order;
import com.example.springapp.repository.OrderRepo;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;

    public List<Order> getAllOrders() {
        return orderRepo.findAll() ;
    }

    public List<Order> getOrderById(Long id) {
        List<Order> order = new ArrayList<>();
        order.add(orderRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + id)));
        return order;
    }

    public Order createOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setCustomerId(orderRequest.getCustomerId());
        order.setDeliveryAddress(orderRequest.getDeliveryAddress());
        order.setCustomerName(orderRequest.getCustomerName());

        LocalDateTime currentDateTime = LocalDateTime.now();
        // LocalDateTime updatedDateTime = currentDateTime.plusHours(2);
        Date deliveryTime = Date.from(currentDateTime.atZone(ZoneId.systemDefault()).toInstant());
        order.setDeliveryTime(deliveryTime);

        order.setTotalCost(orderRequest.getTotalCost());
        order.setItems(orderRequest.getItems());

        return orderRepo.save(order);
    }
    
}