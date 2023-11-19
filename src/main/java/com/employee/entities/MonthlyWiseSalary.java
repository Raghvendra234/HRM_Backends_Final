package com.employee.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class MonthlyWiseSalary 
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int monthlySalaryId;
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
	
	private String month;
	private String years;
	private double workedDays;
	private boolean isDeleted=false;
	
	@OneToOne(targetEntity = Employee.class)
	private Employee employee;
	
}
