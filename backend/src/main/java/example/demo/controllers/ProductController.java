package example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import example.demo.business.abstracts.ProductService;
import example.demo.entities.concretes.Product;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	ProductService productService;
	
	@Autowired
	public ProductController(ProductService productService) {
		super();
		this.productService=productService;
	}
	
	@GetMapping("/getAll")
	public List<Product> getAll() {
		return productService.getAll();
	}
	
	
	@GetMapping("/category/{categoryId}")
	public List<Product> getByCategoryId(@PathVariable int categoryId) {
		return productService.getByCategoryId(categoryId);
	}
	
	@GetMapping("/{id}")
	public Product getById(@PathVariable int id) {
		return productService.getById(id);
	}
	
	@PostMapping("/add")
	public Product Add(@RequestBody Product product) {
		return productService.Add(product);
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id) {
		return productService.delete(id);
	}
	
	@PutMapping("/{id}")
	public Product updateProducts(@PathVariable int id,@RequestBody Product newUser) {
		return productService.updateProducts(id, newUser);
	}
	
}
