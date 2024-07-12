package example.demo.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.demo.business.abstracts.CategoryService;
import example.demo.dataAccess.abstracts.CategoryDao;
import example.demo.entities.concretes.Category;

@Service
public class CategoryManager implements CategoryService{
	CategoryDao categoryDao;
	
	@Autowired
	public CategoryManager(CategoryDao categoryDao) {
		super();
		this.categoryDao=categoryDao;
	}
	
	@Override
	public List<Category> getAll() {
		return categoryDao.findAll();
	}
	
}
