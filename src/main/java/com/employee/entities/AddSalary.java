package com.employee.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="MainSalary")
public class AddSalary 
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int    salaryId;
	private double pf;
	private double esi;
	private double medicalInsurance;
	private String uanNumber;
	private String esiCode;
	private long basicSalary;
	private long houseRentAllowance;
	private long dearnessAllowance;
	private long splAllowance;
	private long childrenEducationAllowance;
	private long incentives;
	private long groupInsurance;
	private long taxDeductedAtSources;
	private long grossSalary;
	private long esic3;
	
	private boolean isDeleted=false;
	
	
	//private double salaryDeducted;
	//private int amount;
	//private String months;
	//private double totalSalary;
    //private double inHandSalary;
	//private int workingDaysInMonths;
	
	@OneToOne(targetEntity = Employee.class)
	private Employee employee;
	
	
	
	


	
}
