package com.foodle.app.service;

import com.foodle.app.DTO.CustomerDTO;
import com.foodle.app.DTO.LoginDTO;
import com.foodle.app.model.Customer;

public interface CustomerService {

	String addCustomer(CustomerDTO customer);

	String loginCustomer(LoginDTO loginDTO);
}
