package example.demo.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import example.demo.entities.concretes.Order;

@Repository
public interface OrderDao extends JpaRepository<Order, Integer>{
}
