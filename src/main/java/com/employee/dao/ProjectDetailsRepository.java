package com.employee.dao;

import java.util.List;
import java.util.Map;import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employee.entities.Employee;
import com.employee.entities.LeaveEmployee;
import com.employee.entities.ProjectDetails;

import jakarta.transaction.Transactional;

public interface ProjectDetailsRepository extends JpaRepository<ProjectDetails,Integer> 
{

	
	//Search query for global
	@Query("SELECT pd from ProjectDetails as pd where CONCAT(pd.projectName,pd.teamLeader,pd.clientName, pd.projectManager) LIKE %?1%")
	public List<ProjectDetails> searchRecords(String keyword);
	
	//Search Project on Project
	@Query(value="Select * from project_details where project_name=?", nativeQuery= true)
	public List<ProjectDetails> searchProject(String projectName);
	
	//Search Client Name on Project
    @Query(value="Select * from project_details where client_name=?", nativeQuery= true)
    public List<ProjectDetails> searchClientName(String clientName);
    
    
    //Search project Manager on Project
    @Query (value="select * from project_details where project_manager=?", nativeQuery=true)
    public List<ProjectDetails> searchProjectManager(String projectManager);
	
    
    
    
    //Advance Search
    @Query(value="Select * from project_details where project_name LIKE (%:project_name%) AND client_name LIKE (%:client_name%) AND project_manager LIKE (%:project_manager%) AND team_leader LIKE (%:team_leader%)", nativeQuery=true)
	public List<ProjectDetails> advanceSearchOption(@Param("project_name") String project_name,@Param("client_name") String client_name,@Param("project_manager") String project_manager,@Param("team_leader") String team_leader);
	
    
    
    
	//search employeee of the project
	@Query(value = "SELECT COUNT(*) FROM project_details WHERE project_name =:projectName", nativeQuery= true)
    public int findProject(@Param("projectName") String projectName);
	
	
	//count project of the company
	@Query(value = "SELECT COUNT( DISTINCT project_name) FROM project_details",nativeQuery = true)
	public int projectCount();
	
	
	@Query(value ="SELECT * FROM project_details pr JOIN add_employee_on_project pre ON pr.project_Id=pre.projects_project_Id\r\n"
			+ "WHERE pr.project_Id=?", nativeQuery=true)
	public List<Map<String,Object>> getAll(int projectId); 
	
	
	
	@Query(value="SELECT project_id AS projectId, client_name AS clientName, from_date AS fromDate, project_manager AS projectManager, project_name AS projectName, team_leader AS teamLeader, to_date AS toDate FROM project_details WHERE project_id=? \r\n"
			+ "", nativeQuery=true)
	public Map<String, Object> getProjects(int projectId);
	
	
	@Query(value="SELECT * FROM project_details_technology WHERE project_details_project_id=3", nativeQuery=true)
	public List<Map<String, Object>> getTechnologyId();
	
	
	
	
	@Query(value="SELECT tec.technology_id AS technologyId, technology_name AS technologyName FROM `technologies` tec\r\n"
			+ "JOIN `project_details_technology` pt ON pt.`technology_technology_id`=tec.`technology_id`\r\n"
			+ "WHERE `project_details_project_id`=?", nativeQuery=true)
	public List<Map<String, Object>> getTechnology(int projectId);
	

	
	@Query(value="SELECT databse.database_id AS databaseId, database_name AS databaseName FROM `databases_tech` databse\r\n"
			+ "JOIN `project_details_database_tech` pd ON pd.`database_tech_database_id`=databse.`database_id`\r\n"
			+ "WHERE `project_details_project_id`=?", nativeQuery=true)
	public List<Map<String, Object>> getDatabases(int projectId);
	
 
	
	 //Get All Projects where is_deleted=false
	@Query(value="SELECT * FROM project_details WHERE is_deleted=FALSE", nativeQuery= true)
	public Page<List<ProjectDetails>> getAllProjectIsdeletedFalse(Pageable page);
	
	
	
	
	 //Set is_deleted=true
	 @Modifying
	 @Transactional 
	 @Query(value="UPDATE project_details SET is_deleted=TRUE WHERE project_id=?", nativeQuery=true)
	 public void setIsdeletedTrue(int project_id);
	 
	 
	
}

















