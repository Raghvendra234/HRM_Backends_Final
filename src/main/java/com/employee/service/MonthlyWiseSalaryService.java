package com.employee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.dao.EmployeeRepository;
import com.employee.dao.MonthlyWiseSalaryRepo;
import com.employee.entities.Employee;
import com.employee.entities.MonthlyWiseSalary;
import com.employee.request.MonthlyWiseSalaryRequest;

@Service
public class MonthlyWiseSalaryService 
{

	@Autowired
	private MonthlyWiseSalaryRepo monthlyWiseSalaryRepo;
	@Autowired
	private EmployeeRepository employeeRepo;
	
	
	//Save Salary monthly wise
	public int saveSalaryMonthly(MonthlyWiseSalaryRequest monthlyWiseSalaryRequest)
	{
		int empId=monthlyWiseSalaryRequest.getEmployeeId();
		String month=monthlyWiseSalaryRequest.getMonth();
		String year=monthlyWiseSalaryRequest.getYears();
		
		int res=this.monthlyWiseSalaryRepo.getSalaryByPassingMonthAndYears(empId, month, year);
		if(res>0)
		{
			return 0;
		}else
		{
			Employee employee=this.employeeRepo.findById(monthlyWiseSalaryRequest.getEmployeeId()).get();
			
			MonthlyWiseSalary monthlyWiseSalary=new MonthlyWiseSalary();
						
			monthlyWiseSalary.setEmployee(employee);
			monthlyWiseSalary.setPf(monthlyWiseSalaryRequest.getPf());
			monthlyWiseSalary.setEsi(monthlyWiseSalaryRequest.getEsi());
			monthlyWiseSalary.setMedicalInsurance(monthlyWiseSalaryRequest.getMedicalInsurance());
			monthlyWiseSalary.setUanNumber(monthlyWiseSalaryRequest.getUanNumber());
			monthlyWiseSalary.setEsiCode(monthlyWiseSalaryRequest.getEsiCode());
			monthlyWiseSalary.setBasicSalary(monthlyWiseSalaryRequest.getBasicSalary());
			monthlyWiseSalary.setHouseRentAllowance(monthlyWiseSalaryRequest.getHouseRentAllowance());
			monthlyWiseSalary.setDearnessAllowance(monthlyWiseSalaryRequest.getDearnessAllowance());
			monthlyWiseSalary.setSplAllowance(monthlyWiseSalaryRequest.getSplAllowance());
			monthlyWiseSalary.setChildrenEducationAllowance(monthlyWiseSalaryRequest.getChildrenEducationAllowance());
			monthlyWiseSalary.setIncentives(monthlyWiseSalaryRequest.getIncentives());
			monthlyWiseSalary.setGroupInsurance(monthlyWiseSalaryRequest.getGroupInsurance());
			monthlyWiseSalary.setTaxDeductedAtSources(monthlyWiseSalaryRequest.getTaxDeductedAtSources());
			monthlyWiseSalary.setGrossSalary(monthlyWiseSalaryRequest.getGrossSalary());
			monthlyWiseSalary.setEsic3(monthlyWiseSalaryRequest.getEsic3());
			monthlyWiseSalary.setMonth(monthlyWiseSalaryRequest.getMonth());
			monthlyWiseSalary.setYears(monthlyWiseSalaryRequest.getYears()); 
			monthlyWiseSalary.setWorkedDays(monthlyWiseSalaryRequest.getWorkedDays());
			
			MonthlyWiseSalary monthlyObj=this.monthlyWiseSalaryRepo.save(monthlyWiseSalary);
			
			return 1;
			}		
	}
	
	
	
//Get Project by passing project id and Get employee On project from different class and send one class
	
	
	
	
	
	
}
