package com.application.springapp.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.application.springapp.DTO.LoginDTO;
import com.application.springapp.DTO.MenuDTO;
import com.application.springapp.DTO.MenuImgDTO;
import com.application.springapp.DTO.RestaurantsDTO;
import com.application.springapp.model.Menu;

public interface RestaurantService {

	String addRestaurant(RestaurantsDTO rest);

	String loginRestaurant(LoginDTO loginDTO);

	Menu addDish(MenuDTO newdish,String id, MultipartFile file)throws IOException;

	List<MenuImgDTO> getDishes(Long id);

	MenuImgDTO viewDish(Long id);

	Menu updateMenu(MenuDTO dish,String id,MultipartFile file)throws IOException;

	String deleteDish(Long id);

}
