package example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import example.demo.business.abstracts.CustomerService;
import example.demo.entities.concretes.Customer;

@RestController
@RequestMapping("/customer")
public class CustomerController {

	CustomerService customerService;
	
	@Autowired
	public CustomerController(CustomerService customerService) {
		this.customerService=customerService;
	}
	@GetMapping("/getAll")
	public List<Customer> getAll() {
		return customerService.getAll() ;
	}
}
