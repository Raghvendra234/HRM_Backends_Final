package com.employee.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;

import com.employee.dao.EmployeeRepository;
import com.employee.dao.LeaveEmployeeRepository;
import com.employee.dao.LeaveImageRepository;
import com.employee.dao.LeaveManageRepository;
import com.employee.entities.Employee;
import com.employee.entities.LeaveEmployee;
import com.employee.entities.LeaveImage;
import com.employee.entities.LeaveManage;
import com.employee.entities.ProjectDetails;
import com.employee.request.LeaveRequest;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
public class LeaveEmployeeService
{
  
	@Autowired
	private LeaveEmployeeRepository leaveEmployeeRepository;
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private LeaveManageService leaveManageService;
	@Autowired
	private LeaveManageRepository leaveManageRepo;
	
	
	
	
	
	//Save only leave Not image
	public LeaveEmployee addLeaveEmployee(LeaveRequest leaveRequest)
	{
		Employee employee= employeeRepository.findById(leaveRequest.getEmployeeId()).get();
		
	    LeaveEmployee leave= new LeaveEmployee();
		
	    leave.setEmployee(employee);
		leave.setFromDate(leaveRequest.getFromDate());
		leave.setToDate(leaveRequest.getToDate());
		leave.setReasonToLeave(leaveRequest.getReasonToLeave());
		leave.setTypesOfLeave(leaveRequest.getTypesOfLeave());
				
		//double startingData=leaveRequest.getFromDate();
		
		LeaveEmployee	 leaveEmp=this.leaveEmployeeRepository.save(leave);
		return leaveEmp;
	
	}
	
	
	
	
	
	
	
	
	//Get LeaveEmployee By Id
	public Optional<LeaveEmployee> getLeaveEmployeeById(int leaveId)
	{
	 Optional<LeaveEmployee> leaveEmp=leaveEmployeeRepository.findById(leaveId);
		return leaveEmp;
	}
	
	
	
	
	
	//Get All Leave 
	public List<LeaveEmployee> getAllLeaveEmployee()
		{

		List<LeaveEmployee>	list=(List<LeaveEmployee>) this.leaveEmployeeRepository.findAll();
		return list;
			
		}
	
	//Update the Leave  
	public void updateLeave(LeaveEmployee leaveEmp, int leaveId)
	{
		leaveEmp.setLeaveId(leaveId);
		leaveEmployeeRepository.save(leaveEmp);
		
	}
	
	
	//Delete The Project 
	public void deleteLeaveEmployee(int leaveId)
	{
		leaveEmployeeRepository.deleteById(leaveId);
		
	}
	
	//Pagination
	
	public Page<LeaveEmployee> getLeaveEmployeeWithPagination(Pageable page)
	{
		return leaveEmployeeRepository.findAll(page);
		
	}
	
	
	
	
	
	//Save JSON (Data) and MultipartFile file
	public LeaveEmployee saveFile(String leaveEmployee, MultipartFile file) throws IOException
	{
		LeaveEmployee leaveJson=new LeaveEmployee();
		
		ObjectMapper objectMapper=new ObjectMapper();
		//leaveJson=objectMapper.readValue(leaveEmployee, file);
		//leaveJson=objectMapper.readValue(leaveEmployee, file);
    	return null;
	}
	
	
	
	
	
	
	
	    //save Leave with image
	
		 @Autowired
		 private LeaveImageRepository leaveImageRepo;
		 @Value("${project.image}")
		 private String path;
		
		
		//Save LeaveEmployee with Image
		public LeaveEmployee addLeaveEmployeeWithImage(LeaveRequest leaveRequest, MultipartFile file)
		{
			Employee employee= employeeRepository.findById(leaveRequest.getEmployeeId()).get();
			String  imageFilePath=path+file.getOriginalFilename();
			
			
			//Save Image and then return Id
			LeaveImage fileData=this.leaveImageRepo.save(LeaveImage.builder()
	                                                                         .name(file.getOriginalFilename())
	                                                                         .imageType(file.getContentType())
	                                                                          .filePath(imageFilePath).build()); 
			
			
			
			
			
		
			System.out.print("Insode Leave Service ==============================");
			System.out.println(fileData);
			
		    LeaveEmployee leave= new LeaveEmployee();
			
		    leave.setEmployee(employee);
		    leave.setFromDate(leaveRequest.getFromDate());
			leave.setToDate(leaveRequest.getToDate());
			leave.setReasonToLeave(leaveRequest.getReasonToLeave());
			leave.setTypesOfLeave(leaveRequest.getTypesOfLeave());
			leave.setLeaveImage(fileData);		
			
			
			
			 //Related Deduct Leave code
//			 int emplId=leaveRequest.getEmployeeId();
//		     LeaveManage manage=this.leaveManageService.getSingleLeaveManage(emplId);
//		      
//		     int casualLeave=manage.getCasualLeave();
//			 int sickLeave=manage.getSickLeave();
//			 int marriage=manage.getMarriageLeave();
//			 int maternityLeave=manage.getMaternityLeave();
//			 int paternityLeave=manage.getPaternityLeave();
//		     int bareavementLeave=manage.getBareavementLeave();
//		     int earnedLeave=manage.getEarnedLeave();
//			
//			
//		     String typeOfLeave=leaveRequest.getTypesOfLeave();
//		     int leaveDays=leaveRequest.getLeaveDays();
//		     
//		     if(typeOfLeave.equalsIgnoreCase("casualleave"))
//		     {
//		    	 int leftLeave=casualLeave-leaveDays;
//		    	 if(leftLeave>0)
//		    	 {
//		    	  int res=this.leaveManageRepo.updateCasualLeave(leftLeave, emplId);
//		    	//if(res>0)
//		    	  {
//		    		  
//		    	  }
//		    	 }
		     
		     
			
		     
		     
		     
		     
		     
		     
		     
			LeaveEmployee	 leaveEmp=this.leaveEmployeeRepository.save(leave);
			return leaveEmp;
		
		}
		
		
}



















