package example.demo.business.abstracts;

import java.util.List;

import example.demo.entities.concretes.Order;

public interface OrderService {

	List<Order> getAll();
	Order saveOrder(Order order);
	
}
