package example.demo.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.demo.business.abstracts.OrderService;
import example.demo.dataAccess.abstracts.OrderDao;
import example.demo.entities.concretes.Order;

@Service
public class OrderManager implements OrderService{
	private OrderDao orderDao;
	
	
	@Autowired
	public OrderManager(OrderDao orderDao) {
		super();
		this.orderDao = orderDao;
	}

	@Override
	public List<Order> getAll() {
		return orderDao.findAll();
	}

	@Override
	public Order saveOrder(Order order) {
		return orderDao.save(order);
	}
	

}
