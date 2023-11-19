package com.employee.controller;

import java.io.ByteArrayInputStream;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dao.AddSalaryRepository;
import com.employee.dto.APIResponse;
import com.employee.entities.AddSalary;
import com.employee.entities.LeaveEmployee;
import com.employee.entities.ProjectDetails;
import com.employee.request.SalaryRequest;
import com.employee.service.AddSalaryService;

@RestController
@RequestMapping("api/addsalary")
public class AddSalaryController 
{
	
	
    @Autowired
	private AddSalaryService addSalaryService;
    @Autowired
    private AddSalaryRepository addSalaryRepo;
    
    
    
    //Add salary handler
    @PostMapping("")
    public ResponseEntity<AddSalary> salaryAdd(@RequestBody SalaryRequest addSalary)
    {
    	try
    	{
//        AddSalary salary=this.addSalaryService.saveSalary(addSalary);
    	AddSalary salary=this.addSalaryService.saveSalaryOnly(addSalary);
		return ResponseEntity.of(Optional.of(salary));
    	}catch(Exception e)
    	{
    		e.printStackTrace();
    		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    	}
    }
    
    
    
    //Get Salary By salaryId
    @GetMapping("/{salaryId}")
    public ResponseEntity<Optional<AddSalary>> getSalary(@PathVariable ("salaryId") int salaryId)
    {
    	    	
    	 Optional<AddSalary> salary=this.addSalaryService.getSalaryById(salaryId);
    	
    	if(salary==null)
    	{
    	 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();	
    	}else
    	{
    	 return ResponseEntity.of(Optional.of(salary));
    	}
    	
    }
    
    
    
    //Update Salary
   	@PutMapping("/{salaryId}")
   	public ResponseEntity<AddSalary> updateSalaryById(@RequestBody AddSalary addSalary, @PathVariable ("salaryId") int salaryId)
   	{
   		try
   		{
   		this.addSalaryService.updateSalary(addSalary, salaryId);
   		return  ResponseEntity.ok(null);
   		}catch(Exception e)
   		{
   			e.printStackTrace();
   			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
   		}
   	}
   	
   	
    //Delete salary by Id
    @DeleteMapping("/{salaryId}")	
   	public ResponseEntity<AddSalary> deleteSalaryById(@PathVariable ("salaryId") int salaryId)
   	{
       	try
       	{
   		this.addSalaryService.deleteSalary(salaryId);
   		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
       	}catch(Exception e)
       	{
       		e.printStackTrace();
       		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
       	}
 	
   	}
    
       // Get All Salary Details
       @GetMapping("")
       public ResponseEntity<List<AddSalary>> showSalary()
       {
        try
        {
           List<AddSalary> list=this.addSalaryService.getAllSalaryDetails();
       	return ResponseEntity.of(Optional.of(list));
        }catch(Exception e)
        {
       	e.printStackTrace(); 
       	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
       
       }
       
      
   
      
       
       
       
       
       
       
//       @GetMapping("/pagination")
//       public  APIResponse<Page<AddSalary>> getSalaryWithPagination(Pageable page)
//       {
//    	 Page<AddSalary>  pageSalary=addSalaryService.findAllSalaryWithPagination(page);
//    	 
//    	 return new APIResponse<>(pageSalary.getSize(), pageSalary);
//       }
       
       
       
       
       
             // OR    
//       @GetMapping("/averagesalary")
//       public ResponseEntity<Double> averagSalaryCount()
//       {
//        try
//        {
//           double list=this.addSalaryService.averageSalary();
//       	return ResponseEntity.of(Optional.of(list));
//        }catch(Exception e)
//        {
//       	e.printStackTrace(); 
//       	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//       
//       }
    	   
       
       
    
       //Advance Search
       @GetMapping("/advancesearch")
       public List<AddSalary> advanceSearch(@RequestParam(value="basic_salary", defaultValue="")String basic_salary,
    		                                 @RequestParam(value="gross_salary", defaultValue="")String gross_salary)
       {
    	 List<AddSalary> list= this.addSalaryRepo.advanceSearchOption(basic_salary, gross_salary);
    	 return list;
       }
       
       
       
       
       
       
       // Here Code of salary Pdf
       //Get Salary Slip by passing month, year and EmployeeId
       
       @GetMapping("/salaryslippdf/{salaryId}")
       public ResponseEntity<InputStreamResource> createSalaryPdf(@PathVariable ("salaryId") int salaryId)
       {
    	ByteArrayInputStream salaryPdf=this.addSalaryService.generateSalarySlipPdf(salaryId);
    	 
    	HttpHeaders httpHeaders=new HttpHeaders();
    	httpHeaders.add("Content-Disposition","inline; file=SalarSlip.pdf");
    	
    	
    	return ResponseEntity.ok()
    			             .headers(httpHeaders)
    			             .contentType(MediaType.APPLICATION_PDF)
    			             .body(new InputStreamResource(salaryPdf));
    	
       }
       
       
       
       
       
       
       
       
       
       //Get Salary By Passing EmployeeId
       @GetMapping("salary/empId/{empId}")
       public ResponseEntity<?> getSalaryDataByEmpId(@PathVariable int empId)
       {
    	AddSalary list=this.addSalaryRepo.getSalaryByPassingEmpId(empId);
    	 return ResponseEntity.of(Optional.of(list));  
       }
        
       
       
       
       
       
       
       
       
       //Get All Salary where is_deleted=false
       @GetMapping("/paginations") // Sort(little bit sort )
       public Page<List<AddSalary>>  getSalaryWithPage(Pageable page)
       {
    	   System.out.print("Inside =================================");
    	   return this.addSalaryRepo.getAllSalaryIsdeletedFalse(page);
    	 //return this.addSalaryService.findAllSalaryWithPagination(page);
    	   
       }
       
       
       
       
       
       
       
       //Set is_deleted=true
       @PutMapping("/setisdeletedtrue/{salaryId}")
       public ResponseEntity setIsDeletedTrue(@PathVariable int salaryId)
       {
    	   try
    	   {
    		   this.addSalaryRepo.setIsDeletedTrue(salaryId);
    		   return ResponseEntity.ok(null);
    	   }catch(Exception e)
    	   {
    		   e.printStackTrace();
    		   return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    	   }
       }
          
}











