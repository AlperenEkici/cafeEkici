package example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import example.demo.business.abstracts.OrderService;
import example.demo.entities.concretes.Order;


@RestController
@RequestMapping("/order")
public class OrderController {
	OrderService orderService;

	@Autowired
	public OrderController(OrderService orderService) {
		super();
		this.orderService = orderService;
	}
	
	@GetMapping("/getAll")
	public List<Order> getAll() {
		return orderService.getAll();
	}
	@PostMapping("/add")
    public Order saveOrder(@RequestBody Order order){
      return   orderService.saveOrder(order);
    }
	
	
	
}
