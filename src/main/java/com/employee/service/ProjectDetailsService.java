package com.employee.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import com.employee.dao.EmployeeRepository;
import com.employee.dao.ProjectDetailsRepository;
import com.employee.entities.*;
import com.employee.request.ProjectRequest;

@Controller
public class ProjectDetailsService
{

	@Autowired
	private ProjectDetailsRepository projectDetailsRepository;
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private AddEmployeeOnProjectService addEmployeeService;

	
	
//	// Project Save
//	public ProjectDetails addProjectDetails(ProjectRequest projectRequest)
//	{
//		ProjectDetails projectDetails=new ProjectDetails();
//		projectDetails.setProjectName(projectRequest.getProjectName());
//		projectDetails.setClientName(projectRequest.getClientName());
//		projectDetails.setTeamLeader(projectRequest.getTeamLeader());
//		projectDetails.setDevelopingTechnology(projectRequest.getDevelopingTechnology());
//		projectDetails.setDatabaseTechnology(projectRequest.getDatabaseTechnology());
//		projectDetails.setFromDate(projectRequest.getFromDate());
//		projectDetails.setToDate(projectRequest.getToDate());
//		projectDetails.setProjectManager(projectRequest.getProjectManager());
//					
//		ProjectDetails pdetails=this.projectDetailsRepository.save(projectDetails);
//		int projectId=pdetails.getProjectId();
//		addEmployeeService.addProjectIdAndSave(pdetails, projectRequest.getQuantities());
//		
//		return pdetails;
//		
//	}

	
	
	// Project Save and Return Message in case if field is not filled
	
		public String addProjectDetails(ProjectRequest projectRequest)
		{
			ProjectDetails projectDetails=new ProjectDetails();
			
			if(projectRequest.getProjectName()==null)
			{
				throw new BadRequestException("Please Enter Project_Name");
			}else
			{
				projectDetails.setProjectName(projectRequest.getProjectName());
			}
			if(projectRequest.getClientName()==null || projectRequest.getClientName().trim().equalsIgnoreCase(""))
			{
			   throw new BadRequestException("");	
			}
			else
			{
				projectDetails.setClientName(projectRequest.getClientName());	
			}
			
			projectDetails.setTeamLeader(projectRequest.getTeamLeader());
			projectDetails.setFromDate(projectRequest.getFromDate());
			projectDetails.setToDate(projectRequest.getToDate());
			projectDetails.setProjectManager(projectRequest.getProjectManager());
			projectDetails.setTechnology(projectRequest.getTechnology());
			projectDetails.setDatabaseTech(projectRequest.getDatabaseTech()); 
			
			
			System.out.println(projectRequest.getTechnology());
			ProjectDetails pdetails=this.projectDetailsRepository.save(projectDetails);
			
			int projectId=pdetails.getProjectId();
			addEmployeeService.addProjectIdAndSave(pdetails, projectRequest.getQuantities());
			
			return "project saved Successfully !!!";
			
		}
	
		
		
	//Update The Project
	public void updateProjects(ProjectRequest projectRequest, int pId)
	{
	 
		ProjectDetails projectDetails=new ProjectDetails();
	    
		projectDetails.setProjectId(pId);
		projectDetails.setProjectName(projectRequest.getProjectName());
		projectDetails.setClientName(projectRequest.getClientName());
		projectDetails.setTeamLeader(projectRequest.getTeamLeader());
		projectDetails.setFromDate(projectRequest.getFromDate());
		projectDetails.setToDate(projectRequest.getToDate());
		projectDetails.setProjectManager(projectRequest.getProjectManager());
		projectDetails.setDatabaseTech(projectRequest.getDatabaseTech());
		projectDetails.setTechnology(projectRequest.getTechnology());
		
				
		 //pjDetails.setProjectId(pId);
      ProjectDetails pDetails=projectDetailsRepository.save(projectDetails);
		
      this.addEmployeeService.updateAddEmployeeOnProject(pDetails, projectRequest.getQuantities(),pId);
		
		
		}	
			
		
		
		
		
		
		
		
	
//	//Update The Project
//	 public void updateProjects(ProjectDetails pjDetails, int pId)
//	{
//		 pjDetails.setProjectId(pId);
//		projectDetailsRepository.save(pjDetails);
//	
//	}	
//	
	
	
	//Get ProjectDetails by Id
		public Optional<ProjectDetails> getProjectDetailsById(int pId)
	{
		Optional<ProjectDetails> projectDetails=null;
		try
		{
	    projectDetails=this.projectDetailsRepository.findById(pId);
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		return projectDetails;
     }
	
	
		
	
	
	
	
	
	//Delete The Project 
	public void deleteProject(int pId)
	{

		this.addEmployeeService.deleteAddEmployeeProject(pId);
		projectDetailsRepository.deleteById(pId);
		//delete AddEmployeeOnProject
		
		
	}

	
	
	
	//Get All projects 
	public List<ProjectDetails> findAllProject()
	{
		
	  List<ProjectDetails> list=(List<ProjectDetails>) projectDetailsRepository.findAll();
		 
	  return list;
		
	}

	
	
	
	
	//it will sort dynamically using any fields	
	public List<ProjectDetails> findProjectWithSorting(String field)
	{
		//this is only sorting
//		projectDetailsRepository.findAll(Sort.by(field));
		
	return projectDetailsRepository.findAll(Sort.by(Sort.Direction.ASC,field));
		
	}
	
	
	
// this is only for pagination
	public Page<ProjectDetails> findProjectWithPagination(int offset, int pageSize)
	{
     Page<ProjectDetails> project=projectDetailsRepository.findAll(PageRequest.of(offset, pageSize));
		 
		 return project;
	}
	
	
	
	
// this is pagination and sorting (here we have to do something manually)
    public Page<ProjectDetails> findProjectWithPaginationAndSorting(int offset, int pageSize, String fields)
	{
	Page<ProjectDetails> project=projectDetailsRepository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(fields)));                                      
			 
	return project;
	
	}
    
    
    
    
    //project Count
    public int ProCount() {
    	return this.projectDetailsRepository.projectCount();
    }
    
    
    
    
   // Pagination and Sorting (Sort Way)
    public Page<ProjectDetails> findAProjectWithPaginationAndSorting(Pageable page) 
    {
  		return projectDetailsRepository.findAll(page);
	}
	
    
    
    
    
    //Search for Global
    public List<ProjectDetails> searchData(String keyword)
    {
    	if(keyword!= null)
    	{
    		projectDetailsRepository.searchRecords(keyword);
    	}
    	return this.projectDetailsRepository.searchRecords(keyword);
    }
    
    
    
    
	 //get employee of the project
    public int getProjectEmployee(String projectName){
    	
    	return this.projectDetailsRepository.findProject(projectName);
    
    }
    
    
}











