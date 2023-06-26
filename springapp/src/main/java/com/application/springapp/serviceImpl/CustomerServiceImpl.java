package com.application.springapp.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.springapp.DTO.CustomerDTO;
import com.application.springapp.DTO.LoginDTO;
import com.application.springapp.model.Customer;
import com.application.springapp.repository.CustomerRepository;
import com.application.springapp.service.CustomerService;

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
