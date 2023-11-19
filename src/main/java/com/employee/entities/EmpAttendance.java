package com.employee.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class EmpAttendance 
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int attendanceId;
	private int empCode;
	private String empName;
	private String department;
	private String shift;
	private String inTime;
	private String outTime;

}
