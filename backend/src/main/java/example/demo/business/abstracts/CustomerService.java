package example.demo.business.abstracts;

import java.util.List;

import example.demo.entities.concretes.Customer;

public interface CustomerService {

	List<Customer> getAll();
}
