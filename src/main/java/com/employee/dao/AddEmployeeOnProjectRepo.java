package com.employee.dao;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.employee.entities.AddEmployeeOnProject;

import jakarta.transaction.Transactional;

@Transactional
public interface AddEmployeeOnProjectRepo extends JpaRepository<AddEmployeeOnProject, Integer>
{

//	@Query(value="SELECT add_employee_on_project_id AS addEmployeeOnProjectId, employee_id AS employeeId,technologies,remark,projects_project_id   FROM add_employee_on_project WHERE projects_project_id=?", nativeQuery=true)
//	public List<Map<String, Object>> getEmployeeOnProject(int projectId);
	
	@Query(value="SELECT ap.add_employee_on_project_id AS addEmployeeOnProjectId, ap.employee_id AS employeeId,ap.technologies,ap.remark,ap.projects_project_id,\r\n"
			+ "e.`first_name` AS firstName\r\n"
			+ " FROM add_employee_on_project ap JOIN `employee` e ON ap.`employee_id` = e.`employee_id` WHERE ap.`projects_project_id`=?", nativeQuery=true)
	public List<Map<String, Object>> getEmployeeOnProject(int projectId);
	
	
	
	@Query(value="SELECT * FROM add_employee_on_project WHERE projects_project_id=?", nativeQuery=true)
	public List<AddEmployeeOnProject> getProjectAndTechnology(int projectId);
	
	//Delete the records by passing ProjectId
    @Modifying
	@Query(value="DELETE FROM add_employee_on_project WHERE projects_project_id=?", nativeQuery=true)
	public int deleteAddEmployeeOnProject(int projects_project_id);
}
