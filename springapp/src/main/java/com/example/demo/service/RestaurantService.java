package com.foodle.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.foodle.app.DTO.LoginDTO;
import com.foodle.app.DTO.MenuDTO;
import com.foodle.app.DTO.MenuImgDTO;
import com.foodle.app.DTO.RestaurantsDTO;
import com.foodle.app.model.Menu;

public interface RestaurantService {

	String addRestaurant(RestaurantsDTO rest);

	String loginRestaurant(LoginDTO loginDTO);

	Menu addDish(MenuDTO newdish,String id, MultipartFile file)throws IOException;

	List<MenuImgDTO> getDishes(Long id);

	MenuImgDTO viewDish(Long id);

	Menu updateMenu(MenuDTO dish,String id,MultipartFile file)throws IOException;

	String deleteDish(Long id);

}
