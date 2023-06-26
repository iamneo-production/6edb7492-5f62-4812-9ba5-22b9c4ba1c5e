package com.foodle.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodle.app.model.Employees;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees, Long>{
	
	Employees findByEmpEmail(String email);

	Employees findByEmpId(Long id);

}
