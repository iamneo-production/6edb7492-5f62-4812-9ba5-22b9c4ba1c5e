package com.application.springapp.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Customer {
	
	@Id
	@GeneratedValue
	private int id;
	private String customerName;
	private String customerPhnno;
	private String customerEmail;
	private String customerPassword;
	@OneToOne(cascade = CascadeType.ALL)
	private Address customerAddress;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(int id, String customerName, String customerPhnno, String customerEmail,
			String customerPassword,Address customerAddress) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.customerPhnno = customerPhnno;
		this.customerEmail = customerEmail;
		this.customerPassword = customerPassword;
		this.customerAddress = customerAddress;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerPhnno() {
		return customerPhnno;
	}
	public void setCustomerPhnno(String customerPhnno) {
		this.customerPhnno = customerPhnno;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	public String getCustomerPassword() {
		return customerPassword;
	}
	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}
	public Address getCustomerAddress() {
		return customerAddress;
	}
	public void setCustomerAddress(Address customerAddress) {
		this.customerAddress = customerAddress;
	}

}
