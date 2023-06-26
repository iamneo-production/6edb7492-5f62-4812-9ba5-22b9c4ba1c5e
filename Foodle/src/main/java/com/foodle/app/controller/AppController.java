package com.foodle.app.controller;

import com.foodle.app.DTO.CustomerDTO;
import com.foodle.app.DTO.EmployeeDTO;
import com.foodle.app.DTO.LoginDTO;
import com.foodle.app.DTO.MenuDTO;
import com.foodle.app.DTO.MenuImgDTO;
import com.foodle.app.DTO.RestaurantsDTO;
import com.foodle.app.model.Customer;
import com.foodle.app.model.Menu;
import com.foodle.app.service.CustomerService;
import com.foodle.app.service.EmployeeService;
import com.foodle.app.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AppController {

//    @Autowired
//    private MenuRepository menuRepository;
    
    @Autowired
    private RestaurantService restaurantService;
    
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private EmployeeService employeeService;
    
    @PostMapping("/user")
    public String addCustomer(@RequestBody CustomerDTO customer){
    	System.out.print(customer);
        String msg=customerService.addCustomer(customer);
        return msg;
    }
    
    @PostMapping("/login")
	public String loginCustomer(@RequestBody LoginDTO loginDTO)
	{
		String id=customerService.loginCustomer(loginDTO);
		return id;
	}
    
    @PostMapping("/employee")
    public String addEmployee(@RequestBody EmployeeDTO employee){
        String msg=employeeService.addEmployee(employee);
        return msg;
    }
    
    @PostMapping("/employeelogin")
	public String loginEmployee(@RequestBody LoginDTO loginDTO)
	{
		String id=employeeService.loginEmployee(loginDTO);
		return id;
	}
    
    @PostMapping("/restaurant")
    public String addRestaurant(@RequestBody RestaurantsDTO rest){
        String msg=restaurantService.addRestaurant(rest);
        return msg;
    }

    @PostMapping("/restaurantlogin")
	public String loginRestaurant(@RequestBody LoginDTO loginDTO)
	{
		String id=restaurantService.loginRestaurant(loginDTO);
		return id;
	}
    
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
    
    @GetMapping("/edetails/{id}")
    EmployeeDTO getEmpDetails(@PathVariable Long id){
    	  return employeeService.getEmpDetails(id);
//        return menuRepository.findById(id)
//                .orElseThrow(()-> new MenuNotFoundException(id));
    }
    
    @PutMapping("/updateemp/{id}")
    EmployeeDTO updateDetails(@RequestBody EmployeeDTO employee,@PathVariable Long id){
    	  return employeeService.updateDetails(employee,id);	
//        return menuRepository.findById(id)
//                .map(menu -> {
//                    menu.setName(newMenu.getName());
//                    menu.setCuisine(newMenu.getCuisine());
//                    menu.setPrice(newMenu.getPrice());
//                    return menuRepository.save(menu);
//                }).orElseThrow(()->new MenuNotFoundException(id));
    }
}
