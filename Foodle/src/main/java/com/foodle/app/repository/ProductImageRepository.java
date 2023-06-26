package com.foodle.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodle.app.model.ProductImage;

import java.util.Optional;

public interface ProductImageRepository extends JpaRepository<ProductImage,Long> {
    Optional<ProductImage> findByName(String fileName);
}
