package com.foodle.app.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodle.app.DTO.CustomerDTO;
import com.foodle.app.DTO.LoginDTO;
import com.foodle.app.model.Customer;
import com.foodle.app.repository.CustomerRepository;
import com.foodle.app.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository  customerRepository;
	
	@Override
	public String addCustomer(CustomerDTO customer) {
		Customer cust=customerRepository.findByCustomerEmail(customer.getCustomerEmail());
		if(cust!=null&&cust.getCustomerEmail().equals(customer.getCustomerEmail()))
		{
			return "Email Exists";
		}
		else
		{
			Customer customers=new Customer(customer.getId(),customer.getCustomerName(),customer.getCustomerPhnno(),customer.getCustomerEmail(),customer.getCustomerPassword(),customer.getCustomerAddress());
			customerRepository.save(customers);
			return customer.getId()+"";
		}
	}

	@Override
	public String loginCustomer(LoginDTO loginDTO) {
        Customer cust = customerRepository.findByCustomerEmail(loginDTO.getEmail());
        if(cust == null)
        {
        	return "Login Failed : Enter your credentials carefully!";
        }
        else
        {
        	if(cust.getCustomerPassword().equals(loginDTO.getPassword()))
        	{
        		return cust.getId()+"";
        	}
        	else
        	{
        		return "Login Failed : Enter your credentials carefully!";
        	}
        
	}

}
}
