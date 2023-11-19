package com.employee.request;

import java.time.LocalDate;
import java.util.List;

import com.employee.entities.AddEmployeeOnProject;

import com.employee.entities.DatabasesTech;
import com.employee.entities.Technologies;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectRequest 
{

     @NotEmpty
	 @Size(min=3, message = "Project_Name must be min 2 character")
	private String projectName;
	 @NotEmpty
	 @Size(min=3,message = "Client_Name must be min 2 character")
	private String clientName;
	@NotEmpty(message="Please Select Team leader")
	private String teamLeader;
	private LocalDate fromDate;
	private LocalDate toDate;
	
	@NotEmpty(message="Please Select Project manager")
	private String projectManager;
	
//	 @NotEmpty(message="Please Select Databases")
	 private List<String> databaseTechnology;
//	 @NotEmpty(message="Please Select Technologies")
	 private List<String> developingTechnology;
	
	private List<AddEmployeeOnProject> 	quantities;
	
	@NotEmpty(message="Please Select Technologies")
	private List<Technologies> technology;
	@NotEmpty(message="Please Select Databases")
	private List<DatabasesTech> databaseTech;
	
	
}
