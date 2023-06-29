package com.example.fullstackbackend.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.fullstackbackend.Repository.RatingReviewRepository;
import com.example.fullstackbackend.model.RatingReview;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class RatingReviewController {
	@Autowired
	private RatingReviewRepository ratingReviewRepository;
	
	@PostMapping("/rating-review")
	public ResponseEntity<RatingReview> createRatingReview(@RequestBody RatingReview ratingReview) {
        RatingReview createdRatingReview = ratingReviewRepository.save(ratingReview);
        return ResponseEntity.ok(createdRatingReview);
    }

    @GetMapping("/rating-review/{id}")
    public ResponseEntity<RatingReview> getRatingReviewById(@PathVariable Long id) {
        Optional<RatingReview> ratingReview = ratingReviewRepository.findById(id);
        if (ratingReview.isPresent()) {
            return ResponseEntity.ok(ratingReview.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/rating-review")
    public ResponseEntity<List<RatingReview>> getAllRatingReviews() {
        List<RatingReview> ratingReviews = ratingReviewRepository.findAll();
        return ResponseEntity.ok(ratingReviews);
    }
}
