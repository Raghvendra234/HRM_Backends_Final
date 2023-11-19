package com.employee.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.employee.service.EmpAttendanceService;

@RestController
@RequestMapping("api")
public class EmpAttendanceController 
{
   	@Autowired
	private EmpAttendanceService empAttendanceService;
	
   	@PostMapping("/attendance")
   	public ResponseEntity<?> uploadAttendance(@RequestParam("files") MultipartFile files)
   	{
   		if(empAttendanceService.checkExcelFormat(files))
   		{	
   		 this.empAttendanceService.save(files);
   		 return ResponseEntity.of(Optional.of(" Data Saved !!! ........."));
   					
   		}else
   		{
   		 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please Upload Excel Format Only !!!!!!!!");
        }
   	}
	
	
}
