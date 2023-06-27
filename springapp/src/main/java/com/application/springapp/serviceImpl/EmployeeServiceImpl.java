package com.application.springapp.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.springapp.DTO.EmployeeDTO;
import com.application.springapp.DTO.LoginDTO;
import com.application.springapp.model.Employees;
import com.application.springapp.repository.EmployeeRepository;
import com.application.springapp.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	private EmployeeRepository  employeeRepository;
	
	@Override
	public String addEmployee(EmployeeDTO employee) {
		Employees emp=employeeRepository.findByEmpEmail(employee.getEmpEmail());
		if(emp!=null&&emp.getEmpEmail().equals(employee.getEmpEmail()))
		{
			return "Email Exists";
		}
		else
		{
			Employees employees=new Employees(employee.getEmpId(),employee.getEmpName(),employee.getEmpPhone(),employee.getEmpEmail(),employee.getEmpPassword(),employee.getEmpState(),employee.getEmpCity(),employee.getEmpLiceno());
			employeeRepository.save(employees);
			return "Registration Successfull";
		}
	}

	@Override
	public String loginEmployee(LoginDTO loginDTO) {
        Employees emp = employeeRepository.findByEmpEmail(loginDTO.getEmail());
        if(emp == null)
        {
        	return "Login Failed : Enter your credentials carefully!";
        }
        else
        {
        	if(emp.getEmpPassword().equals(loginDTO.getPassword()))
        	{
        		return emp.getEmpId()+"";
        	}
        	else
        	{
        		return "Login Failed : Enter your credentials carefully!";
        	}
        
	}
	}

}
