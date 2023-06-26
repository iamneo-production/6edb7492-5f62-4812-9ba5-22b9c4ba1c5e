package com.foodle.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodle.app.model.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu,Long> {
}
