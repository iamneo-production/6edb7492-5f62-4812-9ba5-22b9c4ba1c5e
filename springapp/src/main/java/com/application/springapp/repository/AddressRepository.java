package com.application.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.application.springapp.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address,Long> {
}
