package com.application.springapp.DTO;
import org.springframework.http.ResponseEntity;

public class MenuImgDTO {
	private Long id;
    private String name;
    private String cuisine;
    private int price;
    private ResponseEntity<byte[]> image;
	public MenuImgDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MenuImgDTO(Long id, String name, String cuisine, int price, ResponseEntity<byte[]> image) {
		super();
		this.id = id;
		this.name = name;
		this.cuisine = cuisine;
		this.price = price;
		this.image = image;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCuisine() {
		return cuisine;
	}
	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public ResponseEntity<byte[]> getImage() {
		return image;
	}
	public void setImage(ResponseEntity<byte[]> image) {
		this.image = image;
	}
    
}