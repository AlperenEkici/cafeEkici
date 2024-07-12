package example.demo.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import example.demo.entities.concretes.Employee;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer>{

}
