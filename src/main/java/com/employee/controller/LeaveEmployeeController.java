package com.employee.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.employee.dao.EmployeeRepository;
import com.employee.dao.LeaveEmployeeRepository;
import com.employee.dto.APIResponse;
import com.employee.entities.LeaveEmployee;
import com.employee.entities.LeaveImage;
import com.employee.entities.ProjectDetails;
import com.employee.request.LeaveRequest;
import com.employee.service.LeaveEmployeeService;
import com.employee.service.LeaveImageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("api/leaveemployee")
public class LeaveEmployeeController
{
	@Autowired
	private LeaveEmployeeService leaveEmployeeService;
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private LeaveImageService leaveImageService;
	@Autowired
	private LeaveEmployeeRepository leaveEmployeeRepo;
	
	
	
  
	
	//Add Leave
	@PostMapping("")
	public ResponseEntity<LeaveEmployee> addLeave(@RequestBody LeaveRequest leaveEmployee)
	{
	  try
		{
		LeaveEmployee leaveEmp=this.leaveEmployeeService.addLeaveEmployee(leaveEmployee);
		return ResponseEntity.of(Optional.of(leaveEmp));
		}catch(Exception e)
		{
		  e.printStackTrace();
		  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	
	
	
	//Get LeaveEmployee By Id
	@GetMapping("/{leaveId}")
	public ResponseEntity<Optional<LeaveEmployee>>  findLeaveById(@PathVariable ("leaveId") int leaveId)
	{
		
		Optional<LeaveEmployee> leaveEmp=this.leaveEmployeeService.getLeaveEmployeeById(leaveId);
		
		if(leaveEmp==null)
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		else
		{
		return ResponseEntity.of(Optional.of(leaveEmp));
		}
		}
	
	
	
	
	 
   //Update Leave Records 
  	@PutMapping("/{leaveId}")
  	public ResponseEntity<ProjectDetails> updateProjectById(@RequestBody LeaveEmployee leaveEmployee, @PathVariable ("leaveId") int leaveId)
  	{
  		try
  		{
  		leaveEmployeeService.updateLeave(leaveEmployee, leaveId);
  		return  ResponseEntity.ok(null);
  		}catch(Exception e)
  		{
  			e.printStackTrace();
  			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
  		}
  	}
  	
  	
  	 	
   
  	
  	
  	//Delete Leave by Id
    @DeleteMapping("/{leaveId}")	
  	public ResponseEntity<LeaveEmployee> deleteProjectById(@PathVariable ("leaveId") int leaveId)
  	{
      	try
      	{
  		this.leaveEmployeeService.deleteLeaveEmployee(leaveId);
       // this.leaveEmployeeRepo.updateIsDeleted(leaveId);		
  		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      	}catch(Exception e)
      	{
      		e.printStackTrace();
      		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
      	}
	
}
      
      
      
      
      //Get All LeaveEmployee without Pagination
      @GetMapping("")
      public ResponseEntity<List<LeaveEmployee>> getAllLeave()
      {
   	 try
   	 {
   	  List<LeaveEmployee> list=leaveEmployeeService.getAllLeaveEmployee();
   	  return ResponseEntity.of(Optional.of(list));	
   	 }catch(Exception e)
   	 {
   		 e.printStackTrace();
   		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
   	 }
   		   
      }
      
      
      
      
//      @GetMapping("/pagination")
//      public APIResponse<Page<LeaveEmployee>> getLeaveEmployeeWithPagination(Pageable page)
//      {
//    	Page<LeaveEmployee> pageLeave=leaveEmployeeService.getLeaveEmployeeWithPagination(page);
//    	  
//    	return new APIResponse<>(pageLeave.getSize(), pageLeave);
//      }
//      
      
      // OR
      
      
      
      //Pagination and IsDeleted=false
      @GetMapping("/pagination")
      public Page<List<LeaveEmployee>> getLeaveEmployeeWithPage(Pageable page)
      {
    	  return this.leaveEmployeeRepo.getAllLeaveIsdeletedFalse(page);
    	 // return this.leaveEmployeeService.getLeaveEmployeeWithPagination(page);
      }
      
      
      
      
     //Set is_deleted true 
     @PutMapping("/leave/{leaveId2}")
     public void setIsDeletedTrue(@PathVariable int leaveId2)
     {
    	try
    		{
    		 this.leaveEmployeeRepo.updateIsDeletedTrue(leaveId2);
    		//return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    		}catch(Exception e)
    		{
    			e.printStackTrace();
    		//	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    		}
    	}
      
      
      
      
      
      
      
      
     
      //Save Image 
      //  private Logger logger=LoggerFactory.getLogger(LeaveEmployeeController.class);
      //It is used to convert JSON into object 
      @Autowired
      private ObjectMapper mapper;
      
      @PostMapping("/leaveimage")
      public ResponseEntity<?> saveDataFile(@RequestParam String leaveEmployee, @RequestParam MultipartFile file) throws IllegalStateException, IOException
      {
    	 LeaveRequest leave=null;
     
     //converting string  into json
      try	  
      {
            leave=mapper.readValue(leaveEmployee, LeaveRequest.class);
            this.leaveEmployeeService.addLeaveEmployeeWithImage(leave, file);
             
      }catch(JsonProcessingException e)
      {
    	  e.printStackTrace();
    	  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Request");
      }
//      this.logger.info("DATA+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//      this.logger.info(leaveEmployee);
      return null; 
      }
      
      
      //Advance Search
      @GetMapping("/advancesearch")
      public List<LeaveEmployee> advanceSearch(@RequestParam(value="types_of_leave", defaultValue="")String types_of_leave,
    		                                   @RequestParam(value="from_date", defaultValue="")String from_date,
    		                                   @RequestParam(value="to_date", defaultValue="")String to_date)
    		                                  
      {
    	List<LeaveEmployee> list=this.leaveEmployeeRepo.advanceSearchOption(types_of_leave, from_date, to_date);
    	  return list;
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
//      //Save JSON Data and multipartFile file
//      
//      @PostMapping(value="/upload", consumes={MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
//      public ResponseEntity<?> uploadFiles(@RequestPart ("leaveEmployee") String leaveEmployee, @RequestPart("file") MultipartFile file)
//      {
//    	  String data=leaveEmployee;
//    	  System.out.println(data);
//    	//  System.out.print(this.laveEmployee);
//    	  return null;
//      }
//      
//      
//      
//     
    
//      
//   
//     
//      @PostMapping("/leave")
//      public ResponseEntity<?> saveFile(@RequestParam String leaveEmployee, @RequestParam MultipartFile file) throws IllegalStateException, IOException
//      {
//    	
//    	  logger.info("Data : {}", file.getOriginalFilename());
//    	  logger.info("Data : {}", file);
//    	  
//    	//int imageId=0;
//    	//imageId=this.leaveImageService.uploadImageToFileSystem(file);
//    	System.out.println("+++++++++++++++++++++++++++++++++++++++"); 
//    	  //System.out.println(imageId);  	  
//     LeaveRequest leave=null;
//     
//     //converting string  into json
//      try	  
//      {
//       leave=mapper.readValue(leaveEmployee, LeaveRequest.class);
//       
//       this.leaveEmployeeService.addLeaveEmployee(leave);
//       
//       
//      }catch(JsonProcessingException e)
//      {
//    	  e.printStackTrace();
//      	  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Request");
//    	  
//    	  
//      }
//      this.logger.info("DATA+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//      this.logger.info(leaveEmployee);
//      return null; 
//      }     
      
      

      
      
           
}















