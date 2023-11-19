package com.employee.request;

import java.time.LocalDate;
import java.util.List;

import com.employee.entities.Employee;
import com.employee.entities.ProjectDetails;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class AddEmployeeOnProjectRequest 

{
	
	private int addEmployeeOnProjectId;
	private  int employeeId;
	private String technologies;
	private String remark;
	
	//private List<Employee> employee;
	private List<ProjectDetails> projectDetials;
	
	
	
}
