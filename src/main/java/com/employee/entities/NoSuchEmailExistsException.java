package com.employee.entities;

public class NoSuchEmailExistsException  extends RuntimeException {
	private String message;

	public NoSuchEmailExistsException(String message) {
		super(message);
		this.message = message;
	}
	
	public NoSuchEmailExistsException() {}

}
