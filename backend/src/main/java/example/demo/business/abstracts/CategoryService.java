package example.demo.business.abstracts;

import java.util.List;

import example.demo.entities.concretes.Category;

public interface CategoryService {
	List<Category> getAll();
}
