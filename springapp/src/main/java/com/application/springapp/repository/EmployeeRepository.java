package com.application.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.application.springapp.model.Employees;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees, Long>{
	
	Employees findByEmpEmail(String email);

}