package com.application.springapp.exception;

public class MenuNotFoundException extends RuntimeException{
    public MenuNotFoundException(Long id){
        super("Could not find the menu with id"+ id);
    }
}
