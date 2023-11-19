package com.employee.entities;



import jakarta.persistence.Entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Address
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int addressId;
	
	//@NotEmpty(message = "address should not be empty")
	private int pinCode;
	
	//@NotEmpty
	private String houseNumber,state, typeOfAddress;
	
	//@NotNull
	//@Size(min=3,message = "city must be 3 charcter")
	private String city;
	
	
	
	
	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", pinCode=" + pinCode + ", houseNumber=" + houseNumber + ", city="
				+ city + ", state=" + state + ", typeOfAddress=" + typeOfAddress + "]";
	}
	

	

}
