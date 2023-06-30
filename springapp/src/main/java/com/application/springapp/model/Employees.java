package com.application.springapp.model;

import javax.persistence.*;

@Entity
public class Employees {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int empId;
    private String empName;
    private String empPhone;
    private String empEmail;
	private String empPassword;
    private String empState;
    private String empCity;
    private String empLiceno;
	public Employees() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employees(int empId, String empName, String empPhone, String empEmail, String empPassword, String empState,
			String empCity, String empLiceno) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.empPhone = empPhone;
		this.empEmail = empEmail;
		this.empPassword = empPassword;
		this.empState = empState;
		this.empCity = empCity;
		this.empLiceno = empLiceno;
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpPhone() {
		return empPhone;
	}
	public void setEmpPhone(String empPhone) {
		this.empPhone = empPhone;
	}
	public String getEmpEmail() {
		return empEmail;
	}
	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}
	public String getEmpPassword() {
		return empPassword;
	}
	public void setEmpPassword(String empPassword) {
		this.empPassword = empPassword;
	}
	public String getEmpState() {
		return empState;
	}
	public void setEmpState(String empState) {
		this.empState = empState;
	}
	public String getEmpCity() {
		return empCity;
	}
	public void setEmpCity(String empCity) {
		this.empCity = empCity;
	}
	public String getEmpLiceno() {
		return empLiceno;
	}
	public void setEmpLiceno(String empLiceno) {
		this.empLiceno = empLiceno;
	}
}
