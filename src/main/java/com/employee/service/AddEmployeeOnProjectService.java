package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.dao.AddEmployeeOnProjectRepo;
import com.employee.entities.AddEmployeeOnProject;
import com.employee.entities.ProjectDetails;
import com.employee.request.AddEmployeeOnProjectRequest;

@Service
public class AddEmployeeOnProjectService 
{
	@Autowired
	private AddEmployeeOnProjectRepo addEmployeeOnProjectRepo;
	

    //Save AddEmployeeOnProject
	public void addProjectIdAndSave(ProjectDetails pdetails, List<AddEmployeeOnProject> addEmpList)
	{
		addEmpList.forEach((d)->{
			d.setProjects(pdetails);
	              	});
		 
		 	   this.addEmployeeOnProjectRepo.saveAll(addEmpList);
		}
	
	
	
	
	
	
	//Update AddEmployeeOnProject
	public void updateAddEmployeeOnProject(ProjectDetails pdetails, List<AddEmployeeOnProject> addEmpList, int projectId)
	{
		
		this.addEmployeeOnProjectRepo.deleteAddEmployeeOnProject(projectId);
		addEmpList.forEach((d)->
		{
			d.setProjects(pdetails);
		});
		this.addEmployeeOnProjectRepo.saveAll(addEmpList);
	}
	
	
	
	
	
	
	//Delete AddEmployeeOnProject
	public void deleteAddEmployeeProject(int projectId)
	{
		this.addEmployeeOnProjectRepo.deleteAddEmployeeOnProject(projectId);
	}
	
}
