package com.foodle.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;


@Entity
public class Menu {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String cuisine;
    private int price;
    @OneToOne(cascade = CascadeType.ALL)
    private ProductImage dimage;

	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Menu(Long id, String name, String cuisine, int price,ProductImage dimage) {
		super();
		this.id = id;
		this.name = name;
		this.cuisine = cuisine;
		this.price = price;
		this.dimage=dimage;
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
    
    public ProductImage getDimage() {
		return dimage;
	}

	public void setDimage(ProductImage dimage) {
		this.dimage = dimage;
	}

	@Override
	public String toString() {
		return "Menu [id=" + id + ", name=" + name + ", cuisine=" + cuisine + ", price=" + price + ", dimage=" + dimage
				+ "]";
	}
}
