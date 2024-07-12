package example.demo.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.demo.business.abstracts.ProductService;
import example.demo.dataAccess.abstracts.ProductDao;
import example.demo.entities.concretes.Product;
import example.demo.exceptions.ProductNotFoundException;

@Service
public class ProductManager implements ProductService{

	ProductDao prodactDao;
	
	@Autowired
	public ProductManager(ProductDao prodactDao) {
		super();
		this.prodactDao = prodactDao;
	}
	
	@Override
	public List<Product> getAll() {
		return prodactDao.findAll();
	}

	@Override
	public Product getById(int id) {
		return prodactDao.findById(id).orElseThrow();
	}

	@Override
	public Product Add(Product product) {
		return prodactDao.save(product);
	}

	@Override
	public String delete(int id) {
		if (!prodactDao.existsById(id)) {
			throw new ProductNotFoundException(id);
		}
		prodactDao.deleteById(id);
		return "User with id " + id + " has been deleted success";
	}

	@Override
	public List<Product> getByCategoryId(int categoryId) {
		return prodactDao.getByCategoryId(categoryId);
	}

	@Override
	public Product updateProducts(int id, Product newUser) {
		Product product = prodactDao.findById(id).orElseThrow(()-> new ProductNotFoundException(id));
		product.setProductName(newUser.getProductName());
		product.setPrice(newUser.getPrice());
		product.setQuantity(newUser.getQuantity());
		product.setCategory(newUser.getCategory());
		return prodactDao.save(product);
	}
	

}
