package com.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.net.ssl.SSLEngineResult.Status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dao.MonthlyWiseSalaryRepo;
import com.employee.entities.AddSalary;
import com.employee.entities.MonthlyWiseSalary;
import com.employee.request.MonthlyWiseSalaryRequest;
import com.employee.service.MonthlyWiseSalaryService;

@RestController
@RequestMapping("api/monthlysalary/")
public class MonthlyWiseSalaryController 
{

	@Autowired
	private MonthlyWiseSalaryService monthlyWiseSalaryService;
	@Autowired
	private MonthlyWiseSalaryRepo monthlyWiseSalaryRepo;
	
	
	@PostMapping("save")
	public ResponseEntity<?> saveMonthlySalary(@RequestBody MonthlyWiseSalaryRequest monthlyWiseSalaryRequest)
	{


	//Map<String, String> map=new HashMap<>();
   //map.put("message", projectDetailsService.addProjectDetails(projectDetails));
	//return ResponseEntity.ok(map);
		
	int res=this.monthlyWiseSalaryService.saveSalaryMonthly(monthlyWiseSalaryRequest);
	if(res==1)
	{
		  return new ResponseEntity<String>("The recodrs Saved !!!",HttpStatus.OK); 
	}
	else if(res ==0)
	{
	 //   	Map<String, String> map=new HashMap<>();
	   //     map.put("message", "This records already exists !!!");
	        
	     //   return new ResponseEntity.ok(map);)
	    	return new ResponseEntity<String>("This records already exists !!!",HttpStatus.INTERNAL_SERVER_ERROR);
	}
	else
	{
		    return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	
	
	
	//Get All Monthly wise Salary with paginations
	@GetMapping("/getallmonthlysalary")
	public Page<List<MonthlyWiseSalary>>  getSalaryWithPage(Pageable page)
	{
	  return this.monthlyWiseSalaryRepo.getAllSalaryIsdeletedFalse(page);
	}
	
	
	//Advance Search
	@GetMapping("advancesearch")
	public Page<List<MonthlyWiseSalary>> advanceSearch(@RequestParam(value="month", defaultValue="")String month,
			                                           @RequestParam(value="years", defaultValue="")String years, Pageable page)
	                                                   
	{
      Page<List<MonthlyWiseSalary>> list=this.monthlyWiseSalaryRepo.advanceSearchOption(month, years, page);
		return list;
	}
    
  
	//Get Monthly Salary By Id
	@GetMapping("/getmonthlysalarybyid/{monthlySalaryId}")
	public ResponseEntity<?> getMonthlySalaryByPassingId(@PathVariable int monthlySalaryId)
	{
		MonthlyWiseSalary monthlySalary=this.monthlyWiseSalaryRepo.findById((long) monthlySalaryId).get();
		if(monthlySalary==null)
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
		return ResponseEntity.ok(monthlySalary);
	}
	
    
	//Update Monthly salary 
	@PutMapping("update/{monthlyId}/{month}/{year}")
	public ResponseEntity<MonthlyWiseSalary> updateMonthlySalary(@RequestBody MonthlyWiseSalary monthlyWiseSalary,
			                                                     @PathVariable int monthlyId,
			                                                     @PathVariable String month,
			                                                     @PathVariable String year)
	{
		monthlyWiseSalary.setMonthlySalaryId(monthlyId);
		monthlyWiseSalary.setMonth(month);
		monthlyWiseSalary.setYears(year);
		
		try
		{
		this.monthlyWiseSalaryRepo.save(monthlyWiseSalary);
		return null;
		}catch(Exception e)
		{
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		

	}
	
}















