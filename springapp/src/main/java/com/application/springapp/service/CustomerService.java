package com.application.springapp.service;

import com.application.springapp.DTO.CustomerDTO;
import com.application.springapp.DTO.LoginDTO;
import com.application.springapp.model.Customer;
import org.springframework.stereotype.Service;
@Service
public interface CustomerService {

	String addCustomer(CustomerDTO customer);

	String loginCustomer(LoginDTO loginDTO);
}
