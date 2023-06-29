package com.example.fullstackbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fullstackbackend.model.RatingReview;

public interface RatingReviewRepository extends JpaRepository<RatingReview, Long> {

}
