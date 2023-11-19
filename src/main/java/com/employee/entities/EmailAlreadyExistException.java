package com.employee.entities;

public class EmailAlreadyExistException extends RuntimeException{

	
	
    private String message;
 
    public EmailAlreadyExistException() {}
 
    public EmailAlreadyExistException(String msg)
    {
        super(msg);
        this.message = msg;
    }

}
