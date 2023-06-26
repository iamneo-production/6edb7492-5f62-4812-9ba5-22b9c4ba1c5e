package com.foodle.app.service;

import com.foodle.app.DTO.EmployeeDTO;
import com.foodle.app.DTO.LoginDTO;

public interface EmployeeService {
	
	String addEmployee(EmployeeDTO customer);

	String loginEmployee(LoginDTO loginDTO);

	EmployeeDTO getEmpDetails(Long id);

	EmployeeDTO updateDetails(EmployeeDTO employee, Long id);

}
