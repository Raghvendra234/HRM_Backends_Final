package com.employee.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SalaryRequest 
{

	private double pf;
	private double esi;
	private double medicalInsurance;
	private double salaryDeducted;
	
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
	
	private int employeeId;
	
	//private String employeeName;
    //private int amount;
	//private String months;
	//private double totalSalary;
	//private double inHandSalary;
	//private int    workingDaysInMonths;
	

}
