package com.employee.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Technologies 
{
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long technologyId;
	@NotEmpty(message="Please Select Technologies")
	private String technologyName;
	
}
