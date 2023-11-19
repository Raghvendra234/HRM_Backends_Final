package com.employee.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.employee.entities.LeaveEmployee;

import jakarta.transaction.Transactional;

public interface LeaveEmployeeRepository extends JpaRepository<LeaveEmployee, Integer>
{

	//Get All Leave where is_deleted=false
    @Query(value="SELECT * FROM leave_employee WHERE is_deleted=FALSE", nativeQuery= true)
    public Page<List<LeaveEmployee>> getAllLeaveIsdeletedFalse(Pageable page);

    //Set leave  is_deleted=true
    @Modifying
    @Transactional 
    @Query(value="UPDATE  leave_employee SET is_deleted=TRUE WHERE leave_id=?", nativeQuery= true)
    public void updateIsDeletedTrue(int leave_id);
    
    @Query(value="Select * from leave_employee where types_of_leave LIKE (%:types_of_leave%) between from_date LIKE (%:from_date%) AND to_date LIKE (%:to_date%)", nativeQuery=true)
    public List<LeaveEmployee> advanceSearchOption(@Param("types_of_leave") String types_of_leave,@Param("from_date")String from_date,@Param("to_date")String to_date); 
}
