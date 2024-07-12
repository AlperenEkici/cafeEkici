package example.demo.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import example.demo.entities.concretes.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category,Integer>{
	
}
