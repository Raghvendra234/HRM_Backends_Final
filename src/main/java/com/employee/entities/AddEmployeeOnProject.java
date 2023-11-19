package com.employee.entities;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class AddEmployeeOnProject 
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int addEmployeeOnProjectId;
	private int employeeId;
	private String technologies;
	private String remark;
	
	//private int projectId;
    @OneToOne
    private ProjectDetails projects; 
	
	
}
