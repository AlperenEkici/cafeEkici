	package example.demo.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import example.demo.entities.concretes.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer>{

	@Query("From Product where category.id=:categoryId")
	List<Product> getByCategoryId(int categoryId);
	
	
}
