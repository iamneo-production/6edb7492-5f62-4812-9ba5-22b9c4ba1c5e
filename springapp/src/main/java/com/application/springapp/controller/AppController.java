package main.java.com.application.springapp.controller;

import com.application.springapp.DTO.CustomerDTO;

import com.application.springapp.DTO.EmployeeDTO;
import com.application.springapp.DTO.LoginDTO;
import com.application.springapp.DTO.MenuDTO;
import com.application.springapp.DTO.MenuImgDTO;
import com.application.springapp.DTO.RestaurantsDTO;
import com.application.springapp.model.Customer;
import com.application.springapp.model.Menu;
import com.application.springapp.service.CustomerService;
import com.application.springapp.service.EmployeeService;
import com.application.springapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")


public class AppController {

    @PostMapping("/dish")
    Menu newdish(@RequestParam("productImage") MultipartFile file,
    		@RequestParam("mainId") String id,
    		@RequestParam("name") String name,
    		@RequestParam("cuisine") String cuisine,
    		@RequestParam("price") int price)throws IOException{
    	  MenuDTO newdish=new MenuDTO();
    	  newdish.setName(name);
    	  newdish.setCuisine(cuisine);
    	  newdish.setPrice(price);
    	  return restaurantService.addDish(newdish,id,file);	
//        return menuRepository.save(newdish);
    }

    @GetMapping("/dishes/{id}")
    List<MenuImgDTO> getAlldishes(@PathVariable Long id){
        return restaurantService.getDishes(id);
    }

    @GetMapping("/dish/{id}")
    MenuImgDTO getMenuById(@PathVariable Long id){
    	  return restaurantService.viewDish(id);
//        return menuRepository.findById(id)
//                .orElseThrow(()-> new MenuNotFoundException(id));
    }

    @PutMapping("/dish")
    Menu updateMenu(@RequestParam("productImage") MultipartFile file,
    		@RequestParam("mainId") String id,
    		@RequestParam("name") String name,
    		@RequestParam("cuisine") String cuisine,
    		@RequestParam("price") int price)throws IOException{
	      MenuDTO newdish=new MenuDTO();
	  	  newdish.setName(name);
	  	  newdish.setCuisine(cuisine);
	  	  newdish.setPrice(price);
    	  return restaurantService.updateMenu(newdish,id,file);	
//        return menuRepository.findById(id)
//                .map(menu -> {
//                    menu.setName(newMenu.getName());
//                    menu.setCuisine(newMenu.getCuisine());
//                    menu.setPrice(newMenu.getPrice());
//                    return menuRepository.save(menu);
//                }).orElseThrow(()->new MenuNotFoundException(id));
    }

    @DeleteMapping("/dish/{id}")
    String deleteMenu(@PathVariable Long id){
//        if(!menuRepository.existsById(id)){
//            throw new MenuNotFoundException(id);
//        }
//        menuRepository.deleteById(id);
//        return "Dish with id "+id+" has been deleted.";
        return restaurantService.deleteDish(id);
    }
    
}
