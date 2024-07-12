package example.demo.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import example.demo.entities.concretes.Customer;

@Repository
public interface CustomerDao extends JpaRepository<Customer, Integer>{

}
