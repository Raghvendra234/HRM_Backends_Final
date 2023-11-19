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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dao.AddEmployeeOnProjectRepo;
import com.employee.dao.ProjectDetailsRepository;
import com.employee.dto.APIResponse;
import com.employee.entities.*;
import com.employee.request.AddEmployeeOnProjectRequest;
import com.employee.request.ProjectRequest;
import com.employee.service.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/addproject")
@CrossOrigin("*")
public class ProjectDetailsController 
{
	
	@Autowired
    private ProjectDetailsService projectDetailsService;
	@Autowired
	private AddEmployeeOnProjectService addEmployeeOnProjectService;
	@Autowired
	private ProjectDetailsRepository projectRepo;
	@Autowired
	private AddEmployeeOnProjectRepo addEmployeeOnProjectRepo;
	@Autowired
	private ProjectDetailsRepository projectDetailsRepo;
	
	
	// Add Projects in ProjectDetails 
//	@PostMapping("")
//	public ResponseEntity<ProjectDetails> addProject(@Valid @RequestBody ProjectRequest projectDetails )
//	{
//	 try
//	    {
//		 
//	        ProjectDetails pdetails=projectDetailsService.addProjectDetails(projectDetails);
//	        return ResponseEntity.of(Optional.of(pdetails));
//		}catch(Exception e)
//		{
//			e.printStackTrace();
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//		}
//	
//	}
	
	
	
	
	//This records only for Testing
    //Give message every fields, in case if the field is not filled
	//	@PostMapping("/saves")
//		public ResponseEntity<?> AddEmployeeEmail(@Valid @RequestBody Employee employee)
//		{
//			Map<String,String> map = new HashMap<>();
//			map.put("message", employeeService.AddEmployeeEmail(employee));
//			
//			return ResponseEntity.ok(map);
//			
//		}
	
	@PostMapping("/save")
	public ResponseEntity<?> addProject(@Valid @RequestBody ProjectRequest projectDetails )
	{
		Map<String, String> map=new HashMap<>();
		map.put("message", projectDetailsService.addProjectDetails(projectDetails));
		
	 	return ResponseEntity.ok(map);
	}
	

	

   
	//Update Projects
	@PutMapping("/{pjId}")
	public ResponseEntity<ProjectDetails> updateProjectById(@Valid @PathVariable ("pjId") int pjId, @RequestBody ProjectRequest projectsRequest)
	{
		try
		{
		projectDetailsService.updateProjects(projectsRequest, pjId);
		return  ResponseEntity.ok(null);
		}catch(Exception e)
		{
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	
	
	
    //Delete Project by Id
    @DeleteMapping("/{pjId}")	
	public ResponseEntity<ProjectDetails> deleteProjectById(@PathVariable ("pjId") int pjId)
	{
    	try
    	{
		this.projectDetailsService.deleteProject(pjId);
   		
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    	}catch(Exception e)
    	{
    		e.printStackTrace();
    		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    	}
    	}
	
	
    
    
	//Get all Projects with pagination
	@GetMapping("")
	 public ResponseEntity<List<ProjectDetails>> findAllProject()
	 {
	   List<ProjectDetails> pjDetails=
			   projectDetailsService.findAllProject();
		
	   if(pjDetails.size()<=0)
	   {
		   return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	   }
	  return ResponseEntity.status(HttpStatus.CREATED).body(pjDetails);
	}

	
	@GetMapping("/projectcount")
	public ResponseEntity<Integer> CountAllProject(){
		int pjDetails=projectDetailsService.ProCount();
		   
		  return ResponseEntity.status(HttpStatus.CREATED).body(pjDetails);
		
		
	}
	
	
       @GetMapping("/pro/{projectName}")
	   public  ResponseEntity<?> getAllDesignation(@PathVariable String projectName) {
		int des=projectDetailsService.getProjectEmployee(projectName);
		Map<String,Object> map=new HashMap<>();
		map.put("count", des);
		return ResponseEntity.ok(map);
		
	}
	
	
	
	//Sorting by properties only
		@GetMapping("/{field}")
		public APIResponse<List<ProjectDetails>> getProjectsWithSort(@PathVariable String field)
		{
		 List<ProjectDetails> allProject=projectDetailsService.findProjectWithSorting(field);
			
			return new APIResponse<>(allProject.size(),allProject);
			
		}
		
		//Pagination only
		@GetMapping("/pagination/{offset}/{pageSize}")
		public APIResponse<Page<ProjectDetails>> getProjectsWithPagination(@PathVariable ("offset") int offset, @PathVariable ("pageSize") int pageSize)
		{
	    Page<ProjectDetails> projectWithpagination=projectDetailsService.findProjectWithPagination(offset, pageSize);
			
			return new APIResponse<>(projectWithpagination.getSize(), projectWithpagination);
			
		}
		
		
		//Pagination and Sorting
		@GetMapping("/pagenumber&{offset}/pagesize&{pageSize}/sortedby&{field}")
		public APIResponse<Page<ProjectDetails>> getProjectsWithPaginationAndSort(@PathVariable int offset, @PathVariable int pageSize, @PathVariable String field)
		{
	    Page<ProjectDetails> projectWithpagination=projectDetailsService.findProjectWithPaginationAndSorting(offset, pageSize, field);
			
			return new APIResponse<>(projectWithpagination.getSize(), projectWithpagination);
			
		}
		
		
		@GetMapping("/pagination")
		public APIResponse<Page<List<ProjectDetails>>> getAProjectsWithPaginationAndSort(Pageable page)
		{
	   // Page<ProjectDetails> projectWithpagination=projectDetailsService.findAProjectWithPaginationAndSorting(page);
		Page<List<ProjectDetails>> 	projectWithpagination=this.projectDetailsRepo.getAllProjectIsdeletedFalse(page);
			return new APIResponse<>(projectWithpagination.getSize(), projectWithpagination);
			
		}
		            //( OR )
		
		
		
//		@GetMapping("/paginations")
//		public Page<ProjectDetails> getAllProjectsWithPaginationAndSort(Pageable page)
//		{
//		    return projectDetailsService.findAProjectWithPaginationAndSorting(page);
//		}	
//		
		
		
		
		//Advance  Searching
		@GetMapping("/advancesearch")
		public List<ProjectDetails> advanceSearch(@RequestParam(value="project_name", defaultValue="")String project_name,
			                                      @RequestParam(value="client_name", defaultValue="")String client_name,
				                                  @RequestParam(value="project_manager", defaultValue="")String project_manager,
				                                  @RequestParam(value="team_leader", defaultValue="")String team_leader)
		{
			System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
			System.out.println(project_name);
			System.out.println(client_name);
			System.out.println(project_manager);
			System.out.println(team_leader);
		   List<ProjectDetails> list=this.projectDetailsRepo.advanceSearchOption(project_name,client_name,project_manager,team_leader);
	
		   System.out.println("Printing size=======");
		   System.out.println(list.size());
		   for(Object obj: list)
		   {
			   System.out.println("Printing project Data=========");
			   System.out.println(obj);
		   }
			return list;
		}
		
		
		
		
		
		
		
		//Searching for global project
		@GetMapping("search/{keyword}")
		public List<ProjectDetails> seach(@PathVariable ("keyword") String keyword)
		{
		 List<ProjectDetails> list=this.projectDetailsService.searchData(keyword);	
		 return list;
		}
		
		//Search Project 
		@GetMapping("projectname/{projectName}")
		public  ResponseEntity<List<ProjectDetails>> searchProjectName(@PathVariable String projectName)
		{
			List<ProjectDetails> pjName=this.projectDetailsRepo.searchProject(projectName);
		    if(pjName==null)
		    {
		    	return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		    }
		    return ResponseEntity.of(Optional.of(pjName));
			
		}
		
		//Search Project Manager 
		@GetMapping("projectmanager/{projectManager}")
		public  ResponseEntity<List<ProjectDetails>> searchProjectManagerName(@PathVariable String projectManager)
		{
			List<ProjectDetails> pjName=this.projectDetailsRepo.searchProjectManager(projectManager);
		    if(pjName==null)
		    {
		    	return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		    }
		    return ResponseEntity.of(Optional.of(pjName));
			
		}
		
		//Search Client Name 
		@GetMapping("clientname/{clientName}")
		public  ResponseEntity<List<ProjectDetails>> searchClient(@PathVariable String clientName)
		{
		List<ProjectDetails> pjName=this.projectDetailsRepo.searchClientName(clientName);
		 if(pjName==null)
		   {
		   	return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		   }
		   return ResponseEntity.of(Optional.of(pjName));
					
		}
		
		
		
		//Get ProjectDetails By passing ProjectId
		@GetMapping("/getby/{pjId}")
       //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
		public ResponseEntity<Optional<ProjectDetails>> findProjectById(@PathVariable ("pjId") int pjId)
		{
		 Optional<ProjectDetails>	pjDetails=projectDetailsService.getProjectDetailsById(pjId);
		 
		 if(pjDetails==null)
		 {
			 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		 }else
		 {
			 return ResponseEntity.of(Optional.of(pjDetails));
		 }
		}
	
		
		
		
		
	
     @GetMapping("proj/{projectId}")
     public ResponseEntity<?> projects(@PathVariable int projectId)
     {
    	//Get projectDetails only Not Technology and Database 
    	Map<String, Object> projects=this.projectDetailsRepo.getProjects(projectId);
       //Get Technology	
       List<Map<String, Object>> technology=this.projectDetailsRepo.getTechnology(projectId);	 
       //Get Databases
       List<Map<String, Object>> databases=this.projectDetailsRepo.getDatabases(projectId);
       //Get AddEmployeeOnProject
       List<Map<String, Object>> addEmployeeOnProject=this.addEmployeeOnProjectRepo.getEmployeeOnProject(projectId);
       
       System.out.println("Printing technology ======");
       for(Object obj: addEmployeeOnProject)
       {
    	
       }
       
      Map<String, Object> newMap=new HashMap<>(projects);
      
      newMap.put("technology", technology);
      newMap.put("databaseTech", databases);
      newMap.put("quantities", addEmployeeOnProject);
      
     return ResponseEntity.ok(newMap);
     }
     
     

     
     //Get All Projects where is_deleted=false
     @GetMapping("/isdeletedfalse")
     public Page<List<ProjectDetails>> findAllProjectIsDeletedFalse(Pageable page)
     {
        return this.projectDetailsRepo.getAllProjectIsdeletedFalse(page);
     }
  
     
     
     //Set is_deleted=true
     @PutMapping("/setisdeletedtrue/{projectId}")
     public ResponseEntity setIsDeletedTrue(@PathVariable int projectId)
     {
    	 try
    	 {
    		 this.projectDetailsRepo.setIsdeletedTrue(projectId);
    		 return ResponseEntity.ok().body(null);
    	 }catch(Exception e)
    	 {
    		 e.printStackTrace();
    		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    	 }
    	 
    	 
     }
       
   }



















