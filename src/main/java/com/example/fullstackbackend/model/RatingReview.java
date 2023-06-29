package com.example.fullstackbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "rating_reviews")
public class RatingReview {
	
	@Id
	@GeneratedValue
	private Long id;
	private Long rating;
	private Long response;
	@Column(length = 500)
	private String review;
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getRating() {
		return rating;
	}
	
	public void setRating(Long rating) {
		this.rating = rating;
	}
	
	public Long getResponse() {
		return response;
	}
	
	public void setResponse(Long response) {
		this.response = response;
	}
	
	public String getReview() {
		return review;
	}
	
	public void setReview(String review) {
		this.review = review;
	}
	
	public String getResponseAsString() {
		return String.valueOf(response);
	}
}
