package example.demo.business.abstracts;

import java.util.List;

import example.demo.entities.concretes.Product;

public interface ProductService {

	List<Product> getAll();
	List<Product> getByCategoryId(int categoryId);
	
	Product getById(int id);
	
	Product Add(Product product);
	
	String delete(int id);
	
	Product updateProducts(int id, Product newUser);
}
