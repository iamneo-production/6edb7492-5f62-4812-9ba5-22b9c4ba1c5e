package com.example.springapp.dto;
import javax.persistence.CascadeType;
import javax.persistence.OneToOne;

import com.example.springapp.model.Address;
import com.example.springapp.model.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data @NoArgsConstructor @AllArgsConstructor
public class Customers {
	private Long id;
    private String name;
    private String password;
    private String phone;
    private Address address;
}
