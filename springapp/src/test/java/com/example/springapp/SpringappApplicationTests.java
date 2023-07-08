package com.example.springapp;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.example.springapp.model.MenuItem;
import com.example.springapp.model.Order;
import com.example.springapp.model.Restaurant;
import com.example.springapp.service.AddressService;
import com.example.springapp.service.CustomerService;
import com.example.springapp.service.MenuItemService;
import com.example.springapp.service.OrderService;
import com.example.springapp.service.RestaurantService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {

	 @Autowired
	    private MockMvc mockMvc;
	    
	    @Mock
	    private MenuItemService menuItemService;
	    
	    @Mock
	    private RestaurantService restaurantService;

	    @Mock
	    private OrderService orderService;
	   

		 private String asJsonString(Object object) throws JsonProcessingException {
		        ObjectMapper objectMapper = new ObjectMapper();
		        return objectMapper.writeValueAsString(object);
		    }
		 
		 MenuItem m=new MenuItem(1L,"Abc","qwee",10.0,"tags");
		  MenuItem m1=new MenuItem(3L,"Sound","qwee",10.0,"tags");
		  MenuItem m2=new MenuItem(2L,"Sound","qwee",10.0,"tags");

		  
		  List<MenuItem> listMenu= Arrays.asList(m,m2);

		 Restaurant mock= new Restaurant(1L,"Abc","Chennai",1L);
		 Restaurant mockRes= new Restaurant(1L,"Abc","Chennai",2L);
		 Restaurant mockRes1= new Restaurant(2L,"Abc","Chennai",3L);
		    
         List<Restaurant> mockLists= Arrays.asList(mock,mockRes1);
         
         @SuppressWarnings("deprecation")
		Date dateTime= new Date(2023,05,04,9,23);
		 
         Order order1=new Order(1L,1L,1L,1L,120D,"Chennai",dateTime,"Delivered");
         Order order2=new Order(2L,2L,1L,1L,120.5,"Trichy",dateTime,"Delivered");

		    
		    @Test
		    public void testCreateRestaurant() throws Exception {
		    
		        mockMvc.perform(MockMvcRequestBuilders.post("/restaurant")
		                .contentType(MediaType.APPLICATION_JSON)
		                .content(asJsonString(mock)))
		                .andExpect(MockMvcResultMatchers.status().isCreated());

		    }
		    @Test
		    public void testUpdateRestaurant() throws Exception {
		    
		        mockMvc.perform(MockMvcRequestBuilders.post("/restaurant")
		                .contentType(MediaType.APPLICATION_JSON)
		                .content(asJsonString(mockRes)))
		                .andExpect(MockMvcResultMatchers.status().isCreated());

		    }
		 
		 @Test
		    public void testGetRestaurantAll() throws Exception {
		    	
		        Mockito.when(restaurantService.getAllRestaurant()).thenReturn(mockLists);
		        mockMvc.perform(get("/restaurant"))
		        .andExpect(MockMvcResultMatchers.status().isOk())
		        .andDo(print())
	            .andExpect(content().contentType("application/json"))
	   			.andExpect(jsonPath("$").isArray())
	   			.andReturn();
		    }
		 
		 @Test
		    public void testGetRestaurantById() throws Exception {
		    	
			 Long id=1L;
		        Mockito.when(restaurantService.getRestaurantById(id)).thenReturn(mock);
		        mockMvc.perform(get("/restaurant")
		        		.param("id", "1"))
		        .andExpect(MockMvcResultMatchers.status().isOk())
		        .andDo(print())
	            .andExpect(content().contentType("application/json"))
	   			.andExpect(jsonPath("$").isArray())
	   			.andReturn();
		    }
		 
		 @Test
		    public void testGetRestaurantByName() throws Exception {
		    	
			 String name="Abc";
		        Mockito.when(restaurantService.findByRestaurantName(name)).thenReturn(mock);
		        mockMvc.perform(get("/restaurant")
		        		.param("name", name))
		        .andExpect(MockMvcResultMatchers.status().isOk())
		        .andDo(print())
	            .andExpect(content().contentType("application/json"))
	   			.andExpect(jsonPath("$").isArray())
	   			.andReturn();
		    }
		  
		 @Test
		    public void testGetOrderAll() throws Exception {

		        mockMvc.perform(get("/order"))
		        .andExpect(MockMvcResultMatchers.status().isOk())
		        .andDo(print())
	            .andExpect(content().contentType("application/json"))
	   			.andExpect(jsonPath("$").isArray())
	   			.andReturn();
		    }
		 
		 @Test
		    public void testGetOrderById() throws Exception {

		        mockMvc.perform(get("/order")
		        		.param("id", "1"))
		        .andExpect(MockMvcResultMatchers.status().isOk())
		        .andDo(print())
	            .andExpect(content().contentType("application/json"))
	   			.andExpect(jsonPath("$").isArray())
	   			.andReturn();
		    }
		 
		  
		  @Test
		    public void testCreateMenuItem() throws Exception {
		    
		    	boolean value=true;
			 Mockito.when(menuItemService.createMenuItem(m)).thenReturn(value);
		        mockMvc.perform(MockMvcRequestBuilders.post("/menu-item")
		                .contentType(MediaType.APPLICATION_JSON)
		                .content(asJsonString(m)))
		                .andExpect(MockMvcResultMatchers.status().isCreated());
		    }
		  
	
		 @Test
		    public void testGetMenuItemAll() throws Exception {
		    	
		        Mockito.when(menuItemService.getAllMenuItem()).thenReturn(listMenu);
		        mockMvc.perform(get("/menu-item"))
		        .andExpect(MockMvcResultMatchers.status().isOk())
		        .andDo(print())
	            .andExpect(content().contentType("application/json"))
	   			.andExpect(jsonPath("$").isArray())
	   			.andReturn();
		    }
		 
		 @Test
		    public void testGetMenuById() throws Exception {
		    	
			 Long id=1L;
		        Mockito.when(menuItemService.getMenuItemById(id)).thenReturn(m);
		        mockMvc.perform(get("/menu-item")
		        		.param("id", "1L"))
		        .andExpect(MockMvcResultMatchers.status().isOk())
		        .andDo(print())
	            .andExpect(content().contentType("application/json"))
	   			.andExpect(jsonPath("$").isArray())
	   			.andReturn();
		    }

}
