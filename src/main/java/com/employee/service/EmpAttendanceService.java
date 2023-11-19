package com.employee.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.employee.dao.EmpAttendanceRepository;
import com.employee.entities.EmpAttendance;

@Service
public class EmpAttendanceService 
{

	
	
	@Autowired 
	private EmpAttendanceRepository empAttendanceRepository;
	
	
	public boolean checkExcelFormat(MultipartFile files)
	{
		String contentType=files.getContentType();
		System.out.println("Checking type ++++++++++++++++++++++++");
		System.out.println(contentType);
		
		if(contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
		{
			return true;
		}else
		{
			return false;
		}
	}
	
	
		
	
	public List<EmpAttendance> convertExcelToListOfAttendance(InputStream inputStream)
	{
	   List<EmpAttendance> list=new ArrayList<>();	
	   try
	   {
		  XSSFWorkbook workBook=new XSSFWorkbook(inputStream); 
		  XSSFSheet sheet=workBook.getSheet("Data");
		  //Now Getting row
		  
		  int rowNumber=0;
		 
		  Iterator<Row> iterator=sheet.iterator();
		  while(iterator.hasNext())
		  {
		   Row row=iterator.next();
		   if(rowNumber==0)
		   {
			   rowNumber++;
			   continue;
		   }
		   
		   Iterator<Cell> cells=row.iterator();
		   int cellId=0;
		   EmpAttendance empAttendance=new EmpAttendance();
		   
		   while(cells.hasNext())
		   {
			  Cell cell=cells.next();
		      
			  switch(cellId)
			  {
			  case 0: 
			   empAttendance.setEmpCode((int)cell.getNumericCellValue());
			     break;
			  case 1:
				  empAttendance.setEmpName(cell.getStringCellValue());
				  break;
			  case 2:
				  empAttendance.setDepartment(cell.getStringCellValue());
				  break;
			  case 3:
				  empAttendance.setShift(cell.getStringCellValue());
				  break;
			  case 4:
				  empAttendance.setInTime(cell.getStringCellValue());
				  break;
			  case 5:
				  empAttendance.setOutTime(cell.getStringCellValue());
				  break;
				default:
					break;
			  }
			  
			  cellId++;
		   }
		   
		   list.add(empAttendance);
		  }

		  
	   }catch(Exception e)
	   {
		   e.printStackTrace();
	   }
		return list;
	}
	
	
	
	
	public void save(MultipartFile files) 
	{
		try {
		
	   List<EmpAttendance> attendance=this.convertExcelToListOfAttendance(files.getInputStream());
		
	   this.empAttendanceRepository.saveAll(attendance);
	   
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	}
	
}
















