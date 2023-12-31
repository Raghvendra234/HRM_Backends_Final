package com.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dao.EmailService;
import com.employee.dao.EmployeeRepository;
import com.employee.dto.APIResponse;
import com.employee.entities.*;
import com.employee.request.EmployeeDropdownResponse;
import com.employee.service.EmailServiceEmp;
//import com.employee.entities.Address;
//import com.employee.entities.Qualification;
import com.employee.service.EmployeeService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/employee")
@CrossOrigin("*")
public class EmployeeController 
{
	
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private EmailServiceEmp emailService;
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//@Autowired
    //private Address address;
    //@Autowired
	//private Qualification qualification;
	
	Employee empl;
	// Exception Handler method added in CustomerController to
		// handle CustomerAlreadyExistsException exception
		@ExceptionHandler(value= EmailAlreadyExistException.class)
		@ResponseStatus(HttpStatus.CONFLICT)
		public ErrorResponse handleCustomerAlreadyExistsException(EmailAlreadyExistException ex)
		{
			return new ErrorResponse(HttpStatus.CONFLICT.value(),
	                ex.getMessage());
	   }
		
		
		
		
	//Get single Employee URL/handler
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Employee>> getEmployee(@PathVariable ("id") int id)
	{
	 Optional<Employee> employee=employeeService.getEmployeeById(id);
	  
	    if(employee==null)
	    {
	     return	ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }
	 
	    return ResponseEntity.of(Optional.of(employee));
		
    	}
	
	
	
	
	
	
	
	

	
	//Save employee
	@PostMapping("/save")
	public ResponseEntity<Employee> addEmployee(@Valid @RequestBody Employee employee)
	 {
			
		try
	    	{
		      empl=employeeService.addNewEmployee(employee);
		     // this.emailService.mailSend(empl);
			 return ResponseEntity.of(Optional.of(empl));
		
		   }catch(Exception e)
		   {
		    e.printStackTrace();
	     	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		   }
	 }
	
	
	  //Save Employee
	   //Give message every fields, in case if the field is not filled
		@PostMapping("/saves")
		public ResponseEntity<?> AddEmployeeEmail(@Valid @RequestBody Employee employee) 
		{
			Map<String, String> map=new HashMap<>();
			map.put("message", employeeService.AddEmployeeEmail(employee));
			return ResponseEntity.ok(map);
				
		}



  //Save employee and Get Id
	@PostMapping("/saveemployeeId")
	public ResponseEntity<Integer> getEmployeeId(@RequestBody Employee employee)
	 {
				
		try
	       {
		      int employeeId=employeeService.addEmployeeAndGetId(employee);
		     System.out.print("+++++++++++++++++++++++++++++");
		    // System.out.println(employeeId);
	         
		    // getId(employeeId);
		     return ResponseEntity.of(Optional.of(employeeId));
		
		   }catch(Exception e)
		   {
		    e.printStackTrace();
	     	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		   }
	 }

	
	
	
	// Update Employee By Id
	@PutMapping("/{employeeId}")
	public ResponseEntity updateEmployee(@PathVariable ("employeeId") int employeeId, @RequestBody Employee empl)
	{
		try
		{
		this.employeeService.updateEmployeeById(employeeId, empl);
		
       return ResponseEntity.ok(null);
		}catch(Exception e)
		{
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	
	
	
	
	//Delete Employee
	@DeleteMapping("/{employeeId}")
	   public ResponseEntity<Void> deleteBook(@PathVariable("employeeId") int empId)
	   {
		   try
		   {
		   this.employeeService.deleteEmployeeById(empId);
		
		   return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		   }catch(Exception e)
		   {
			   e.printStackTrace();
			   return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();  
		   }
		   
	   }
	
	
	
	
	
	
	// Get All employee
	@GetMapping()
	public ResponseEntity<List<Employee>> getAllEmployee()
	{
	  List<Employee> list=employeeService.getAllEmployee();
	  
	   if(list.size()<=0)
	   {
		   return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	   }
	   
     	   return ResponseEntity.status(HttpStatus.CREATED).body(list);
		
	}
	
	
	
	
	
	//Get All pagination and sorting
	@GetMapping("/paginations")
	public APIResponse<Page<Employee>> getAllEmpoyeeWithPagination(Pageable page)
	{
	 Page<Employee> empl=employeeService.findEmployeeByPagination(page);
		return new APIResponse<>(empl.getSize(),empl);
	}
	
	
	
	
	
	
	
	@GetMapping("/dropdown")
	public List<Map<String, Object>> getEmployeeDropdown() 
	{
	       return employeeService.getNameAndEmail();
	}


	
	
	
	
//	//Pagination and Sorting 
   @GetMapping("/pagination")
   public Page<Employee> findEmployeeWithPage(Pageable page)
   {
	   return this.employeeService.getEmployeeWithPage(page);
   }
	
	
	   //Pagination and Sorting 
//	   @GetMapping("/pagination")
//	   public Page<List<Employee>> findEmployeeWithPage(Pageable page)
//	   {
//		   return this.employeeService.getEmployeeWithPage(page);
//	   }

   
   //Search keyword
   @GetMapping("/search/{keyword}")
   public List<Employee> searchData(@PathVariable ("keyword") String keyword)
   {
	List<Employee> list=this.employeeService.searchKeyword(keyword);
	return list;
	   
   }
   
   
   //Advance Search
   @GetMapping("/advancesearch")
   public List<Employee> advanceSearch(@RequestParam(value="first_name", defaultValue="")String first_name,
		                               @RequestParam(value="last_name", defaultValue="")String last_name,
		                               @RequestParam(value="designation", defaultValue="")String designation)
   {
	 List<Employee> list=this.employeeRepository.advanceSearchOption(first_name, last_name, designation);
	 
	 return list;
   }
   
   
   //lopgin 
   @PostMapping("login")
   public int  loginHere(@RequestBody Employee employee)
   {
	      String email=employee.getEmailId();
	      String password= employee.getPassword();
    	int status=this.employeeService.login(email, password);
	    return status; 
   }
   
   
   
   @GetMapping("/empcount")
	public ResponseEntity<Long> getAllEmployee1()
	{
	  long list=employeeRepository.count();
	  
	  
	   
    	   return ResponseEntity.status(HttpStatus.CREATED).body(list);
		
	}
	
	@GetMapping("/designation/{designation}")
	public  ResponseEntity<?> getAllDesignation(@PathVariable String designation) {
		int des=employeeService.getDesignation(designation);
		Map<String,Object> map=new HashMap<>();
		map.put("count", des);
		return ResponseEntity.ok(map);
		
	}
	
	
	//Gat All Employee where is_deleted=false
	@GetMapping("isdeleted")
	public Page<List<Employee>> findAllEmployeeIsDeleted(Pageable page)
	{
		return this.employeeRepository.getAllEmployeeIsDeletedFalse(page);
	}
	
	
	
	
	
	// Set is_deleted = true
	@PutMapping("setisdeleted/{empId}")
	public ResponseEntity setIsDeletedTrue(@PathVariable int empId)
	{
	
	try
	{
		this.employeeRepository.setIsDeletedTrue(empId);
	
   return ResponseEntity.ok(null);
	}catch(Exception e)
	{
		e.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}
	}
	
	
	
	@GetMapping("/gender/{gender}")
	public  ResponseEntity<?> getGender(@PathVariable String gender) {
		int gen=employeeService.getGender(gender);
		Map<String,Object> map=new HashMap<>();
		map.put("count",gen);
	    return ResponseEntity.ok(map);
	}
	
}












