package example.demo.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import example.demo.business.abstracts.EmployeeService;
import example.demo.dataAccess.abstracts.EmployeeDao;
import example.demo.entities.concretes.Employee;
@Service
public class EmployeeManager implements EmployeeService {

	EmployeeDao employeeDao;
	
	@Autowired
	public EmployeeManager(EmployeeDao employeeDao) {
		super();
		this.employeeDao = employeeDao;
	}

	@Override
	public List<Employee> getAll() {
		return employeeDao.findAll();
	}

}
