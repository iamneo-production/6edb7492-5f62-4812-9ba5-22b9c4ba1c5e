package com.foodle.app.serviceImpl;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.foodle.app.ImageUtil;
import com.foodle.app.DTO.LoginDTO;
import com.foodle.app.DTO.MenuDTO;
import com.foodle.app.DTO.MenuImgDTO;
import com.foodle.app.DTO.RestaurantsDTO;
import com.foodle.app.exception.MenuNotFoundException;
import com.foodle.app.model.Menu;
import com.foodle.app.model.ProductImage;
import com.foodle.app.model.Restaurants;
import com.foodle.app.repository.MenuRepository;
import com.foodle.app.repository.RestaurantRepository;
import com.foodle.app.service.RestaurantService;


@Service
public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	private RestaurantRepository restaurantRepository;
	
	@Autowired
	private MenuRepository menuRepository;

	@Override
	public String addRestaurant(RestaurantsDTO rest) {
		Restaurants restaurant=restaurantRepository.findByRestaurantEmail(rest.getRestaurantEmail());
		if(restaurant!=null&&restaurant.getRestaurantEmail().equals(rest.getRestaurantEmail()))
		{
			return "Email Exists";
		}
		else
		{
			Restaurants restaurants=new Restaurants(rest.getRestaurantId(),rest.getRestaurantName(),rest.getRestaurantAddress(),rest.getRestaurantEmail(),rest.getRestaurantPassword(),rest.getRestaurantmenu());
			restaurantRepository.save(restaurants);
			return restaurants.getRestaurantId()+"";
		}
//		else
//		{
//		Employee employee=new Employee(employeeDTO.getEmp_id(),employeeDTO.getEmp_name(),employeeDTO.getEmp_mobno(),employeeDTO.getEmp_email(),employeeDTO.getEmp_password(),employeeDTO.getEmp_country(),employeeDTO.getEmp_state(),employeeDTO.getEmp_district(),employeeDTO.getEmp_shift(),employeeDTO.getEmp_licsno());
//		employeeRepository.save(employee);
//		return rest.getId();
	}

	@Override
	public String loginRestaurant(LoginDTO loginDTO) {
        Restaurants rest = restaurantRepository.findByRestaurantEmail(loginDTO.getEmail());
        if(rest == null)
        {
        	return "Login Failed : Enter your credentials carefully!";
        }
        else
        {
        	if(rest.getRestaurantPassword().equals(loginDTO.getPassword()))
        	{
        		System.out.println("sdfjkzsgkgzsdjkghfjkzshfjklhzjklshfjkhzjkshfjhsf;jlashflkaslkfhs"+rest.getRestaurantId());
        		return rest.getRestaurantId()+"";
        	}
        	else
        	{
        		return "Login Failed : Enter your credentials carefully!";
        	}
        }
	}

	@Override
	public Menu addDish(MenuDTO newdish,String id,MultipartFile file)throws IOException {
		Restaurants rest=restaurantRepository.findByRestaurantId(Long.parseLong(id));
		ProductImage pImage = new ProductImage();
        pImage.setName(file.getOriginalFilename());
        pImage.setType(file.getContentType());
        pImage.setImageData(ImageUtil.compressImage(file.getBytes()));
        Menu dish=new Menu(newdish.getId(),newdish.getName(),newdish.getCuisine(),newdish.getPrice(),pImage);
		List<Menu> obj = rest.getRestaurantmenu();
		obj.add(dish);
		restaurantRepository.save(rest);
		System.out.println("sdfhzshdflkhafhkjzhjsljkf"+dish.getId());
//		rest.setRestaurantmenu(dish);
//        System.out.println(pImage.getName()+" "+pImage.getType());
		return null;
	}

	@Override
	public List<MenuImgDTO> getDishes(Long id) {
		
		Restaurants rest=restaurantRepository.findByRestaurantId(id);
		List<Menu> temp=rest.getRestaurantmenu();
		List<MenuImgDTO> mi = new ArrayList<>();
		for(Menu m : temp)
		{
			byte[] image = ImageUtil.decompressImage(m.getDimage().getImageData());
		    ResponseEntity<byte[]>img=ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
			mi.add(new MenuImgDTO(m.getId(),m.getName(),m.getCuisine(),m.getPrice(),img));
		}
//		for(MenuImgDTO i:mi)
//		{
//			System.out.println(i.getImage());
//		}
		return mi;
	}

	@Override
	public MenuImgDTO viewDish(Long id) {
		Menu men=menuRepository.findById(id).orElseThrow(()-> new MenuNotFoundException(id));
	    byte[] image = ImageUtil.decompressImage(men.getDimage().getImageData());
	    ResponseEntity<byte[]>img=ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
		MenuImgDTO mi=new MenuImgDTO(men.getId(),men.getName(),men.getCuisine(),men.getPrice(),img);
		return mi;
	}

	@Override
	public Menu updateMenu(MenuDTO newMenu,String id,MultipartFile file)throws IOException {
		ProductImage pImage = new ProductImage();
        pImage.setName(file.getOriginalFilename());
        pImage.setType(file.getContentType());
        pImage.setImageData(ImageUtil.compressImage(file.getBytes()));
		Menu men=menuRepository.findById(Long.parseLong(id)).orElseThrow(()-> new MenuNotFoundException(Long.parseLong(id)));
		men.setName(newMenu.getName());
		men.setCuisine(newMenu.getCuisine());
        men.setPrice(newMenu.getPrice());
        men.setDimage(pImage);
		return menuRepository.save(men);
	}

	@Override
	public String deleteDish(Long id) {
		 if(!menuRepository.existsById(id)){
	            throw new MenuNotFoundException(id);
	        }
	        menuRepository.deleteById(id);
	        return "Dish with id "+id+" has been deleted.";
	}

}
