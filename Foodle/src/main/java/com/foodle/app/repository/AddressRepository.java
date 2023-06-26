package com.foodle.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodle.app.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address,Long> {
}
