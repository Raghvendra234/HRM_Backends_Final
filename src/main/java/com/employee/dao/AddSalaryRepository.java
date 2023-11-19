package com.employee.dao;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employee.entities.AddSalary;
import com.employee.entities.Employee;
import com.employee.entities.LeaveEmployee;

import jakarta.transaction.Transactional;

public interface AddSalaryRepository extends JpaRepository<AddSalary, Integer>
{
	@Query(value = "SELECT AVG(total_salary) Avg_salary FROM main_salary",nativeQuery = true)
	public double AveSalary();
	
	@Query(value ="SELECT * FROM main_salary WHERE employee_employee_id=?", nativeQuery =true)
	public AddSalary getSalaryByPassingEmpId(int empId);
	


		
	@Query(value="select * from  main_salary where gross_salary between 5000 and 10000", nativeQuery=true)
     public Page<List<AddSalary>> getAllSalary10(Pageable page);


	@Query(value="select * from  main_salary where gross_salary between 10000 and 20000", nativeQuery=true)
     public Page<List<AddSalary>> getAllSalary20(Pageable page);

	@Query(value="select * from  main_salary where gross_salary between 20000 and 35000", nativeQuery=true)
     public Page<List<AddSalary>> getAllSalary35(Pageable page);

	@Query(value="select * from  main_salary where gross_salary between 50000 and 500000", nativeQuery=true)
     public Page<List<AddSalary>> getAllSalary50(Pageable page);
	
	@Query(value="Select * from main_salary where gross_salary=?", nativeQuery=true)
	public Page<List<AddSalary>> getParticularSalary(int gross_salary,Pageable page);
	
	//Advance Search
	@Query(value="Select * from main_salary where basic_salary LIKE (%:basic_salary%) AND gross_salary LIKE (%:gross_salary%) ", nativeQuery=true)
	public List<AddSalary> advanceSearchOption(@Param("basic_salary") String basic_salary, @Param("gross_salary") String gross_salary);

	
	
	
	// Get All Salary where is_deleted=false
	@Query(value="SELECT * FROM main_salary WHERE is_deleted=FALSE", nativeQuery= true)
	 public Page<List<AddSalary>> getAllSalaryIsdeletedFalse(Pageable page);
	
	//Set is_deleted= true
	 @Modifying
	 @Transactional 
	 @Query(value="UPDATE main_salary SET is_deleted=TRUE WHERE salary_id=?", nativeQuery=true)
	 public void setIsDeletedTrue(@Param("salary_id") int salary_id);

}










