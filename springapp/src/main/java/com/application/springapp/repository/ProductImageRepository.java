package com.application.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.application.springapp.model.ProductImage;

import java.util.Optional;

public interface ProductImageRepository extends JpaRepository<ProductImage,Long> {
    Optional<ProductImage> findByName(String fileName);
}
