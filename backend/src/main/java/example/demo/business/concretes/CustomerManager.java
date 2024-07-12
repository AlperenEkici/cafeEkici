package example.demo.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.demo.business.abstracts.CustomerService;
import example.demo.dataAccess.abstracts.CustomerDao;
import example.demo.entities.concretes.Customer;

@Service
public class CustomerManager implements CustomerService{

	CustomerDao customerDao; 
		
	@Autowired
	public CustomerManager(CustomerDao customerDao) {
		super();
		this.customerDao = customerDao;
	}

	@Override
	public List<Customer> getAll() {
		return customerDao.findAll() ;
	}

}
