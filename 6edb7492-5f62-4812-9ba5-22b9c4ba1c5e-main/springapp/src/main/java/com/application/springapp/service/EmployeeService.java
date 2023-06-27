package com.application.springapp.service;

import com.application.springapp.DTO.EmployeeDTO;
import com.application.springapp.DTO.LoginDTO;
import org.springframework.stereotype.Service;
@Service
public interface EmployeeService {
	
	String addEmployee(EmployeeDTO customer);

	String loginEmployee(LoginDTO loginDTO);

}
