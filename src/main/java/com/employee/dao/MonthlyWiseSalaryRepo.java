package com.employee.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employee.entities.AddSalary;
import com.employee.entities.MonthlyWiseSalary;

public interface MonthlyWiseSalaryRepo extends JpaRepository<MonthlyWiseSalary, Long> 
{

	@Query(value="SELECT count(*) FROM monthly_wise_salary WHERE employee_employee_id=? AND MONTH=? AND years=?", nativeQuery=true)
	public int getSalaryByPassingMonthAndYears(int employeeId, String month, String years);
	
	@Query(value ="SELECT * FROM monthly_wise_salary WHERE employee_employee_id=?", nativeQuery =true)
	public MonthlyWiseSalary getSalaryByPassingEmployeeId(int empId);

	@Query(value="SELECT * FROM monthly_wise_salary WHERE employee_employee_id=? AND MONTH=? AND years=?", nativeQuery=true)
	public MonthlyWiseSalary getSalaryByPassingMonthYearsPDF(int employeeId, String month, String years);

	@Query(value="SELECT * FROM monthly_wise_salary WHERE is_deleted=FALSE", nativeQuery= true)
    public Page<List<MonthlyWiseSalary>> getAllSalaryIsdeletedFalse(Pageable page);
	
	//Advance Search
	@Query(value="Select * from monthly_wise_salary where month LIKE (%:month%) AND years LIKE (%:years%)", nativeQuery=true)
	public Page<List<MonthlyWiseSalary>> advanceSearchOption(@Param("month") String month,@Param("years") String years, Pageable page);
	
	//Salary id 
    @Query(value="SELECT employee_employee_id FROM monthly_wise_salary WHERE monthly_salary_id=?", nativeQuery=true)
    public int getEmployeeId(int salary_id);

    @Query(value="Select * from monthly_wise_salary where monthly_salary_id=?", nativeQuery=true)
    public MonthlyWiseSalary getMonthSalaryByPassingId(int monthly_salary_id);
    
    
    }
