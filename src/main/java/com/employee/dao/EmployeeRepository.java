package com.employee.dao;

import java.util.List;

import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employee.entities.*;

import jakarta.transaction.Transactional;


public interface EmployeeRepository  extends JpaRepository<Employee, Integer>
{

  @Query(value= "SELECT employee_id as employeeId,first_name as firstName,email_id as emailId from employee",nativeQuery = true)
  public List<Map<String, Object>> findNameAndEmail();


  //Search query
  @Query("SELECT emp from employee as emp where CONCAT(emp.firstName,emp.emailId,emp.designation) LIKE %?1%")
  public List<Employee> search(String keyword);

  //Login Page 
  @Query(value="SELECT count(*) from employee where email_id=? and password=?", nativeQuery= true)
  public int loginPage(String emailId, String password);
 

  @Query(value = "SELECT count(*)FROM employee where designation=?", nativeQuery= true)
  public int findDepartment(String designation);
  
  @Query(value = "SELECT *FROM employee WHERE email_id=?",nativeQuery = true)
  public Employee findEmail(String emailId);
  
  @Query(value="SELECT *FROM employee WHERE contact=?",nativeQuery=true)
  public Employee findContact(String contact);
  
  @Query(value="SELECT *FROM employee WHERE aadhar_card=?",nativeQuery = true)
  public Employee findAdhar(String aadharCard);
 
  @Query(value="SELECT *FROM employee WHERE pan_card=?",nativeQuery = true)
  public Employee findPenCard(String panCard);
  
  @Query(value = "SELECT *FROM employee WHERE account_number=?",nativeQuery = true)
  public Employee findAccount(String accountNumber);
  
  
  @Query(value="SELECT *FROM employee WHERE cif_number=?",nativeQuery = true)
  public Employee findCif(String cifNumber);
//Get All Employee not isDeleted true
//  @Query(value="SELECT * from employee where is_deleted=false", nativeQuery= true)
//  public Page<List<Employee>> getAllEmp();
//  

  
  
  //Get Employee Id By passing name in user class using joins
  @Query(value="SELECT e.employee_id AS employeeId FROM `employee` e JOIN `user` u ON u.email=e.email_id WHERE u.name=?", nativeQuery = true)
  public int getEmployeeId(String name);

  
  //Advance Search
  @Query(value="Select * from employee where first_name LIKE (%:first_name%) AND last_name LIKE (%:last_name%) AND designation LIKE (%:designation%)", nativeQuery=true)
  public List<Employee> advanceSearchOption(@Param("first_name") String first_name, @Param("last_name") String last_name,@Param("designation") String designation);

  
  
  
  
 //Set is_Deleted=true 
 @Modifying
 @Transactional 
 @Query(value="UPDATE employee SET is_deleted=TRUE WHERE employee_id=?", nativeQuery=true)
 public void setIsDeletedTrue(@Param("employee_id") int employee_id);
 
 
 //Get Employee where is_deleted=false
 @Query(value="Select * from employee where is_deleted=false", nativeQuery= true)
 public Page<List<Employee>> getAllEmployeeIsDeletedFalse(Pageable page);
 
 
 
 @Query(value = "SELECT count(*) from employee where gender=?",nativeQuery  =true)
 public int countGender(String gender);
 
  
}













