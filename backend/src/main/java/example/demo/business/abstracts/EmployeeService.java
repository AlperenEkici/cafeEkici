package example.demo.business.abstracts;

import java.util.List;
import example.demo.entities.concretes.Employee;

public interface EmployeeService {
	List<Employee> getAll();
}
