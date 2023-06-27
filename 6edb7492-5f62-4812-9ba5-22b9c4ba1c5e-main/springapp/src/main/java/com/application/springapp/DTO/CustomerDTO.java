package com.application.springapp.DTO;

import com.application.springapp.model.Address;

public class CustomerDTO {

	private int id;
	private String customerName;
	private String customerPhnno;
	private String customerEmail;
	private String customerPassword;
	private Address customerAddress;
	public CustomerDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CustomerDTO(int id, String customerName, String customerPhnno, String customerEmail, String customerPassword,
			Address customerAddress) {
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
	@Override
	public String toString() {
		return "CustomerDTO [id=" + id + ", customerName=" + customerName + ", customerPhnno=" + customerPhnno
				+ ", customerEmail=" + customerEmail + ", customerPassword=" + customerPassword + ", customerAddress="
				+ customerAddress + "]";
	}
}
