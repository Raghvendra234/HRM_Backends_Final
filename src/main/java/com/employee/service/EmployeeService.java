package com.employee.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.employee.entities.BadRequestException;
import com.employee.entities.EmailAlreadyExistException;
import com.employee.entities.Employee;
import com.employee.entities.NoSuchEmailExistsException;
import com.employee.entities.User;
import com.employee.request.EmployeeDropdownResponse;

import jakarta.validation.constraints.Pattern;

import com.employee.dao.EmployeeRepository;


@Service
public class EmployeeService 
{
    @Autowired
	private EmployeeRepository employeeRepository;
    @Autowired
    private UserService userService;
    
    
   
  
    
    // get All Employees
      public List<Employee> getAllEmployee()
	  {
	   
     List<Employee> list=(List<Employee>) this.employeeRepository.findAll();
	 return list;
	  }

      
      
      
        
    // Save Employee
    public Employee addNewEmployee(Employee empl)
    {
    	System.out.println(empl.getFirstName());
    	
    	
        Employee emp=(Employee) this.employeeRepository.save(empl);
		return emp;
    	
    }
    
    
    
 public String  AddEmployeeEmail(Employee employee) {
	 
	 if(employee.getFirstName()==null || employee.getFirstName().trim().equalsIgnoreCase(""))
	 {
		 throw new BadRequestException("Please Enter your First name");
	 }
	 if(employee.getLastName()==null || employee.getLastName().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please Enter your Last name");
	 }
	 if(employee.getAadharCard()==null || employee.getAadharCard().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please Enter your Aadhar Card No.");
	 }
	 
	 if(employee.getContact()==null || employee.getContact().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your 10 digit contact no.");
	 }
	 
	 if(employee.getEmailId()==null || employee.getEmailId().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your email id");
	 }
	 if(employee.getPanCard()==null || employee.getPanCard().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your pan card");
	 }
	 if(employee.getGender()==null || employee.getGender().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your gender");
	 }
	 if(employee.getBankName()==null || employee.getBankName().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your Bank name");
	 }
	 
	 if(employee.getAccountNumber()==null || employee.getAccountNumber().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your Bank Account no");
	 }
	 if(employee.getCifNumber()==null || employee.getCifNumber().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your IFSC number");
	 }
	 if(employee.getBankName()==null || employee.getBankName().trim().equalsIgnoreCase("")) {
		 throw new BadRequestException("Please enter your Bank name");
	 }
	 
	 if(employee.getDateOfBirth()==null) {
		 throw new BadRequestException("Please enter youre date of birth");
	 }
	 
	 LocalDate dateOfBirth=employee.getDateOfBirth();
	 
	 if(employee.getDateOfBirth()!=null) {
		 LocalDate today = LocalDate.now();
		    Period age = Period.between(dateOfBirth, today);
		    if (age.getYears() <= 18) {
		        throw new BadRequestException("The birth date must be greater or equal than 18....!");
		    }
		 
	 }
	 
	 
	 
	 Employee email=employeeRepository.findEmail(employee.getEmailId());
	 Employee contact=employeeRepository.findContact(employee.getContact());
	 Employee aadhar=employeeRepository.findAdhar(employee.getAadharCard());
	 Employee Pan=employeeRepository.findPenCard(employee.getPanCard());
	 Employee account_no=employeeRepository.findAccount(employee.getAccountNumber());
	 Employee  cif=employeeRepository.findCif(employee.getCifNumber());
	 
	 if(email != null ) {
		
		 throw new BadRequestException("Email already exists!!");
	 		
	 }
	 else if(contact != null) {
		 throw new BadRequestException("Contact Already exists");
		 
	 }
	 else if(aadhar != null) {
		 throw new BadRequestException("Aadhar Already exists");
		 
	 }
	 else if(Pan != null) {
		 throw new BadRequestException("Pan no Already exists"); 
	 }
	 else  if(account_no !=null) {
		 throw new BadRequestException("Account no Already exist"); 
	 }
	 else if(cif != null) {
		 throw new BadRequestException("IFSC no already exist");
	 }
	 
	 employeeRepository.save(employee);
	 
	 //Set Employee Role
	 User user=new User();
	 user.setName(employee.getFirstName());
	 user.setEmail(employee.getEmailId());
	 user.setPassword(employee.getPassword());
	 String password2=employee.getContact();
	 long pass=(long) Double.parseDouble(password2);
	 user.setPhone(pass);
	 user.setRole("Employee");
	  
	 userService.savaAll(user);	 
	 return "Employee Added Successfully";
	 	 
	
 }
 
 
	 
   
    
    // Save Employee and Return Id
    public int addEmployeeAndGetId(Employee empl)
    {
    	System.out.println(empl.getFirstName());
    	
    	
        Employee emp=(Employee) this.employeeRepository.save(empl);
        int id=emp.getEmployeeId();
     
        return emp.getEmployeeId();
    	
    }
    

    
    
    //Update Employee
    public void updateEmployeeById(int id, Employee emp)
    {
    	emp.setEmployeeId(id);
    	employeeRepository.save(emp);
    }
    
    
    
    
    
//    //Delete Employee
//    public void deleteEmployeeById(int empId)
//    {
//    	employeeRepository.deleteById(empId);
//    }
    
    //Not Delete Employee records only hides data
    public void deleteEmployeeById(int empId)
    {
    	employeeRepository.deleteById(empId);
    }
    
    
    
    public Page<Employee> findEmployeeByPagination(Pageable page)
    {
    	
    	return employeeRepository.findAll(page);
    }
    
    
    
    
    
    
    // Get Employee By Id
    public Optional<Employee> getEmployeeById(int employeeId)
    {
    	Optional<Employee> employee=null;
    	try
    	{
    		employee=this.employeeRepository.findById(employeeId);	
    		return employee;
    	}catch(Exception e)
    	{
    		e.printStackTrace();
    	}
    	return employee;
    	}
    
    
    
    
    
    
    // Get Employee By Id
    public List<Map<String, Object>> getNameAndEmail()
    {
    	    return  this.employeeRepository.findNameAndEmail();
    }

   //Pagination and Sorting
    public Page<Employee> getEmployeeWithPage(Pageable page)
    {
    	return this.employeeRepository.findAll(page);
    }
    
    
    //Pagination and Sorting not Display Employee which one is isDeleted=true
//    public Page<List<Employee>> getEmployeeWithPage(Pageable page)
//    {
////    	return this.employeeRepository.findAll(page);
//    	return this.employeeRepository.getAllEmp();
//    			
//    }
    

  //Search
    public List<Employee> searchKeyword(String keyword)
    {
    	if(keyword!= null)
    	{
    		this.employeeRepository.search(keyword);
    	}
           return this.employeeRepository.search(keyword);    	
    }
    
    
    //get designation 
    public int getDesignation(String designation){
    	
    	return this.employeeRepository.findDepartment(designation);
    }
    

    
    //login Checking
    public int login(String email, String password)
    {
      int id=this.employeeRepository.loginPage(email, password);
    	return id;
    }
    
  //get employee gender
    public int getGender(String gender) {
 	   return this.employeeRepository.countGender(gender);
    }
}
