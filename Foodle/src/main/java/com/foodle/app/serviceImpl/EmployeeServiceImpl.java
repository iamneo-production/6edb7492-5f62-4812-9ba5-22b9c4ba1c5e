package com.foodle.app.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodle.app.DTO.EmployeeDTO;
import com.foodle.app.DTO.LoginDTO;
import com.foodle.app.model.Employees;
import com.foodle.app.repository.EmployeeRepository;
import com.foodle.app.service.EmployeeService;

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

	@Override
	public EmployeeDTO getEmpDetails(Long id) {
		Employees emp=employeeRepository.findByEmpId(id);
		EmployeeDTO employee=new EmployeeDTO(emp.getEmpId(),emp.getEmpName(),emp.getEmpPhone(),emp.getEmpEmail(),emp.getEmpPassword(),emp.getEmpState(),emp.getEmpCity(),emp.getEmpLiceno());
		return employee;
	}

	@Override
	public EmployeeDTO updateDetails(EmployeeDTO employee, Long id) {
		Employees emp=employeeRepository.findByEmpId(id);
		emp.setEmpName(employee.getEmpName());
		emp.setEmpPhone(employee.getEmpPhone());
		emp.setEmpPassword(employee.getEmpPassword());
		emp.setEmpState(employee.getEmpState());
		emp.setEmpCity(employee.getEmpCity());
		emp.setEmpLiceno(emp.getEmpLiceno());
		employeeRepository.save(emp);
		return null;
	}

}
