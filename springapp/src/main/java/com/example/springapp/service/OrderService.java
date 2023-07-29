package com.example.springapp.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.dto.OrderRequest;
import com.example.springapp.model.Customer;
import com.example.springapp.model.Order;
import com.example.springapp.repository.CustomerRepo;
import com.example.springapp.repository.OrderRepo;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;
    
    @Autowired
    private CustomerRepo custRepo;

    public List<Order> getAllOrders() {
    	
    	List<Order> orders=orderRepo.findAll();
    	for(Order order:orders)
    	{
    		if(order.getDeliveryExecutiveId()!=null) {
    		Customer cust=custRepo.findById(order.getDeliveryExecutiveId()).orElseThrow(() -> new RuntimeException());
    		order.setDeliveryName(cust.getName());
    		order.setDelivreyPhone(cust.getPhone());
    		orderRepo.save(order);}
    	}
        return  orders;
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
        order.setRestaurantName(orderRequest.getRestaurantName());
        order.setRestaurantLocation(orderRequest.getRestaurantLocation());
        order.setTotalCost(orderRequest.getTotalCost());
        order.setItems(orderRequest.getItems());
        order.setStatus(orderRequest.getStatus());

        return orderRepo.save(order);
    }

    public Order updateOrderStatus(Long id, String status,Long did) {
        Order order = orderRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));
        order.setStatus(status);
        order.setDeliveryExecutiveId(did);
        return orderRepo.save(order);
    }
    
}