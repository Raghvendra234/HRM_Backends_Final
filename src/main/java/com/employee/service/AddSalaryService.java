package com.employee.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;

import com.employee.dao.AddSalaryRepository;
import com.employee.dao.EmployeeRepository;
import com.employee.dao.MonthlyWiseSalaryRepo;
import com.employee.entities.AddSalary;
import com.employee.entities.Employee;
import com.employee.entities.LeaveEmployee;
import com.employee.entities.MonthlyWiseSalary;
import com.employee.entities.ProjectDetails;
import com.employee.request.SalaryRequest;
import com.itextpdf.kernel.color.Color;
import com.itextpdf.layout.border.Border;
import com.itextpdf.layout.border.SolidBorder;
import com.lowagie.text.Document;
import com.lowagie.text.Element;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.Table;
import com.lowagie.text.pdf.CMYKColor;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

@Controller
public class AddSalaryService
{
	@Autowired
	private AddSalaryRepository addSalaryRepository;
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private MonthlyWiseSalaryRepo monthlyWiseSalaryRepo;
	
	
	
	//Add salary
	public AddSalary saveSalary(SalaryRequest salaryRequest)
	{
	 Employee employee=employeeRepository.findById(salaryRequest.getEmployeeId()).get();	
     AddSalary addSalary=new AddSalary();
	 
	 //double totalSalary=salaryRequest.getTotalSalary();
	 //System.out.println("totalSalary : "+totalSalary);
	double pf=salaryRequest.getPf();
	System.out.println("pf ==>"+pf);
	//	 pf=totalSalary*pf/100;
	 System.out.println(pf);
		double esi=salaryRequest.getEsi();
	System.out.println("esi ==>"+esi);
		//esi=totalSalary*esi/100;
	System.out.println(esi);
		double medicalInsurance=salaryRequest.getMedicalInsurance();
	System.out.println(medicalInsurance);
	//int workingDays=salaryRequest.getWorkingDaysInMonths();
	System.out.println("Working Days==========================");
	//System.out.println(workingDays);
	System.out.println("InHand Salary=====================");
	//double salary=totalSalary-pf-esi-medicalInsurance;
	//System.out.println(salary);

	String january="january";
	String february="february";
	String march="march";
	String april="april";
	String may="may";
	String june="june";
	String july="july";
	String august="august";
	String september="september";
	String october="october";
	String november="november";
	String december="december";
	
	double perDaySalary;
	double inHandSalaryDeducted=0;
	double inHandSalary=0;
	//String months=salaryRequest.getMonths();
	//System.out.println(months);
//	if(january.equalsIgnoreCase(months) || march.equalsIgnoreCase(months) || may.equalsIgnoreCase(months) || july.equalsIgnoreCase(months) 
	//		|| august.equalsIgnoreCase(months) || october.equalsIgnoreCase(months)	|| december.equalsIgnoreCase(months)         )
	{	
		//Working days total in months = 25
    	//System.out.println(months);
		//perDaySalary=salary/25;
		//System.out.println(perDaySalary);
		//inHandSalary=perDaySalary*workingDays;
		//inHandSalaryDeducted=salary-inHandSalary;
		System.out.println("Deducted Salary ===> "+inHandSalaryDeducted);
	    System.out.println("InHandSalary --->"+ inHandSalary);
	}
	//else if(april.equalsIgnoreCase(months) || june.equalsIgnoreCase(months) || september.equalsIgnoreCase(months) || november.equalsIgnoreCase(months)   )
	{
		//Working days total in months = 24
		//System.out.println(months);
	//	perDaySalary=salary/24;
	//	System.out.println(perDaySalary);
		//inHandSalary=perDaySalary*workingDays;
		//inHandSalaryDeducted=salary-inHandSalary;
		System.out.println(inHandSalary);
		System.out.println("Not Matched !!!");
	}
	//else if(february.equalsIgnoreCase(months))
	{
		//Working days total in months = 22 /23
		//System.out.println(months);
		//perDaySalary=salary/22;
		//System.out.println(perDaySalary);
		//inHandSalary=perDaySalary*workingDays;
	//	inHandSalaryDeducted=salary-inHandSalary;
		System.out.println(inHandSalary);
		System.out.println("Not Matched !!!");
	}
	//else
	{
		System.out.println("Not Matched !!!");
	}
	 //addSalary.setMonths(salaryRequest.getMonths());
	 addSalary.setEmployee(employee);
	 //addSalary.setWorkingDaysInMonths(workingDays);
	 addSalary.setMedicalInsurance(medicalInsurance);
	 //addSalary.setTotalSalary(totalSalary);
	 addSalary.setPf(pf);
	 addSalary.setEsi(esi);
	 //addSalary.setInHandSalary(inHandSalary);
	 //addSalary.setSalaryDeducted(inHandSalaryDeducted);
	 AddSalary salaryObj=this.addSalaryRepository.save(addSalary);
	   return salaryObj;
	}
	
	
	
	//Save Salary Only New 
	public AddSalary  saveSalaryOnly(SalaryRequest salaryRequest)
	{
		
	Employee employee=employeeRepository.findById(salaryRequest.getEmployeeId()).get();	
		 
		 AddSalary addSalary=new AddSalary();	
	
		 addSalary.setEmployee(employee);
		 addSalary.setPf(salaryRequest.getPf());
		 addSalary.setEsi(salaryRequest.getEsi());
		 addSalary.setMedicalInsurance(salaryRequest.getMedicalInsurance());
		 addSalary.setUanNumber(salaryRequest.getUanNumber());
         addSalary.setEsiCode(salaryRequest.getEsiCode());
         addSalary.setBasicSalary(salaryRequest.getBasicSalary());
         addSalary.setHouseRentAllowance(salaryRequest.getHouseRentAllowance());
         addSalary.setDearnessAllowance(salaryRequest.getDearnessAllowance());
         addSalary.setSplAllowance(salaryRequest.getSplAllowance());
         addSalary.setChildrenEducationAllowance(salaryRequest.getChildrenEducationAllowance());
         addSalary.setIncentives(salaryRequest.getIncentives());
         addSalary.setGroupInsurance(salaryRequest.getGroupInsurance());
         addSalary.setTaxDeductedAtSources(salaryRequest.getTaxDeductedAtSources());
         addSalary.setGrossSalary(salaryRequest.getGrossSalary());
         addSalary.setEsic3(salaryRequest.getEsic3());
         
         AddSalary salaryObj=this.addSalaryRepository.save(addSalary);
  	     return salaryObj;
         
         
	
	}
	
	
	
	
	
	//Get Salary By Id
	public Optional<AddSalary> getSalaryById(int salaryId)
	{
	   Optional<AddSalary> salary=this.addSalaryRepository.findById(salaryId);
		return salary;
	}
	
	
	
	
	//Update Salary
	public void updateSalary(AddSalary addSalary, int salaryId)
		{
			addSalary.setSalaryId(salaryId);
			addSalaryRepository.save(addSalary);
			
		}
	
	
	//calculate average salary	
	public double averageSalary() {
    	double pro=this.addSalaryRepository.AveSalary();
		return pro;
    	
    	
    }
	
	
	 //Delete The Salary
		public void deleteSalary(int salaryId)
		{
			addSalaryRepository.deleteById(salaryId);
			
		}
		
	
		
		//Show All Salary
		public List<AddSalary> getAllSalaryDetails()
		{
		 List<AddSalary> list=(List<AddSalary>) this.addSalaryRepository.findAll();
			return list;
		}
	
	
		
		// Pagination and Sorting 
		public Page<AddSalary> findAllSalaryWithPagination(Pageable page)
		{
			return addSalaryRepository.findAll(page);
			
			
		}
	
	
		
		
		
		      //Generate Salary Slip PDF file
		     	private Logger logger=LoggerFactory.getLogger(MonthlyWiseSalaryService.class);
			
				
				public ByteArrayInputStream generateSalarySlipPdf(int salaryId)
				{
				 // AddSalary	salaryObj=this.addSalaryRepository.getSalaryByPassingEmpId(1);
			    //  MonthlyWiseSalary salaryObj=this.monthlyWiseSalaryRepo.getSalaryByPassingEmployeeId(empId);
			    // MonthlyWiseSalary salaryObj=this.monthlyWiseSalaryRepo.getSalaryByPassingMonthYearsPDF(empId, month, year);
				//  MonthlyWiseSalary salaryObj=this.monthlyWiseSalaryRepo.findById(salaryId);
					
				  MonthlyWiseSalary salaryObj=this.monthlyWiseSalaryRepo.getMonthSalaryByPassingId(salaryId);
				  int empId=this.monthlyWiseSalaryRepo.getEmployeeId(salaryId);
			      System.out.println("Salary Object ..............");
			      System.out.println(salaryObj);
				//Employee emp=salaryObj.getEmployee();
			      Employee employeeObj=employeeRepository.findById(empId).get();
			      
			      
			      double basicSalary=salaryObj.getBasicSalary();
			      double houseRentAllowance=salaryObj.getHouseRentAllowance();
			      double dearnessAllowance=salaryObj.getDearnessAllowance();
			      double splAllowance=salaryObj.getSplAllowance();
			      double childrenEducationAllowance=salaryObj.getChildrenEducationAllowance();
			      double incentives=salaryObj.getIncentives();
			      
			      double grossSalary=salaryObj.getGrossSalary();
			      double groupInsurance=salaryObj.getGroupInsurance();
			      double pf=salaryObj.getPf();
			      double esi=salaryObj.getEsi();
			      double medicalInsurance=salaryObj.getMedicalInsurance();
			      double taxDeductedAtSources=salaryObj.getTaxDeductedAtSources();
			      
			      double epf=basicSalary*pf/100;
			      double esic=grossSalary*esi/100;
			      
//			      double total2=groupInsurance+epf+esic+medicalInsurance+taxDeductedAtSources;
			      
			    //Work for new Salary Slip
//			      double totalSalary=salaryObj.getTotalSalary();
					
					logger.info("Created Pdf Started");
					String companyName="Pratikshat Solutions LLP";
					String address="A-79, Second Floor Okhla Phase II New Delhi";
					String salarySlip="PAYSLIP FOR THE MONTH OF MARCH-2023";
					
					
					
					ByteArrayOutputStream out=new ByteArrayOutputStream();
					Document document=new Document();
					PdfWriter.getInstance(document, out);
         			document.open();
					
         		    Font fontTiltle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
         		    fontTiltle.setSize(20);
         		    Paragraph paragraph1 = new Paragraph(companyName, fontTiltle);
         		    paragraph1.setAlignment(Paragraph.ALIGN_CENTER);
         		    document.add(paragraph1);
         		     
         		    
         		    Font fontContent = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        		    fontContent.setSize(11);
         		    Paragraph paraSlip = new Paragraph(address, fontContent);
         		    paraSlip.setAlignment(Paragraph.ALIGN_CENTER);
         		    document.add(paraSlip);
         		   
         		    
         		   //Space
         		    Border border=new SolidBorder(Color.GRAY,1f/2f);
         		            int threecol=190;
         		   			int fullwidth[]= {threecol};
         		   			Table divider=new Table(2);
         		   			
         		   			//divider.setBorder(border);
         		   			divider.setBorder(threecol);
         		   			//document.add(border);
         		   			document.add(divider);
         		    
         		    Font fontSalary = FontFactory.getFont(FontFactory.TIMES_ROMAN);
         		    fontSalary.setSize(17);
        		    Paragraph paraSalary = new Paragraph(salarySlip, fontContent);
        		    paraSalary.setAlignment(Paragraph.ALIGN_CENTER);
        		    document.add(paraSalary);
    
         		    //Space
         		    Border border3=new SolidBorder(Color.GRAY,1f/2f);
         		            
         		            int threecol3=190;
         		   			int fullwidth3[]= {threecol};
         		   			Table divider3=new Table(2);
         		   			
         		   			//divider.setBorder(border);
         		   			divider.setBorder(threecol);
         		   			//document.add(border);
         		   			document.add(divider);
         		   
         		   			
         	
         		   			
         		   			
         		   			
         		   		PdfPTable table = new PdfPTable(4);
                 		  
             		    table.setWidthPercentage(100f);
             		    table.setWidths(new int[] {3,4,3,3});
             		    table.setSpacingBefore(8);

             		    // Create Table Cells for the table header  
             		    PdfPCell cell=new PdfPCell();
             		    
             		    table.addCell(String.valueOf("Emp_Id"));
            		    table.addCell(String.valueOf("PRT-0084"));
            		    table.addCell(String.valueOf("ESI Code"));
           		        table.addCell(String.valueOf(salaryObj.getEsiCode()));
           		        
           		        table.addCell(String.valueOf("Name"));
           		        table.addCell(String.valueOf(employeeObj.getFirstName()));
           		        table.addCell(String.valueOf("PAN No."));
         		        table.addCell(String.valueOf(""));
         		        
         		        table.addCell(String.valueOf("Designation"));
        		        table.addCell(String.valueOf(employeeObj.getDesignation()));
        		        table.addCell(String.valueOf("UAN No."));
         		        table.addCell(String.valueOf(salaryObj.getUanNumber()));
         		        
         		        
         		        table.addCell(String.valueOf("Email_Id"));
        		        table.addCell(String.valueOf(employeeObj.getEmailId()));
        		        table.addCell(String.valueOf("Gross Salary"));
        		        table.addCell(String.valueOf(salaryObj.getGrossSalary()));
    		            
        		        table.addCell(String.valueOf("Total Days in Month"));
        		        table.addCell(String.valueOf(""));
        		        table.addCell(String.valueOf("Net Salary"));
        		        table.addCell(String.valueOf(""));
        		        
        		        
        		        table.addCell(String.valueOf("Total Payable Days"));
        		        table.addCell(String.valueOf(""));
        		        table.addCell(String.valueOf("Month"));
        		        table.addCell(String.valueOf(""));
        		        
        		        table.addCell(String.valueOf("Bank_Name"));
        		        table.addCell(String.valueOf(employeeObj.getBankName()));
        		        table.addCell(String.valueOf("A/C Number"));
        		        table.addCell(String.valueOf(employeeObj.getAccountNumber()));
        		        		
        		        document.add(table);			
         		   			
         		   			
    		      //Space
    		         Border border2=new SolidBorder(Color.GRAY,1f/2f);
    		            		   			int threecol2=190;
    		   			int fullwidth2[]= {threecol};
    		   			Table divider2=new Table(3);
    		   			
    		   			//divider.setBorder(border);
    		   			divider.setBorder(threecol);
    		   			//document.add(border);
    		   			document.add(divider);	
         		   			
         		   			
         		   			
         		   			
    		       
    		        PdfPTable table2 = new PdfPTable(5);
   		            table2.setWidthPercentage(100f);
        		    table2.setWidths(new int[] {4,3,2,3,2});
        		    table2.setSpacingBefore(5);
        		    PdfPCell cell2=new PdfPCell();
        		   
        		   table2.addCell(String.valueOf("Particularss"));
     		       table2.addCell(String.valueOf("Standard Month Salary"));
     		       table2.addCell(String.valueOf("Current Earnings"));
    		       table2.addCell(String.valueOf("Particulars"));
    		       table2.addCell(String.valueOf("Deductions"));
    		      
   		           
    		       table2.addCell(String.valueOf("Basic Salay"));
    		       table2.addCell(String.valueOf(basicSalary));
    		       table2.addCell(String.valueOf(basicSalary));
    		       table2.addCell(String.valueOf("Group Insurance"));
   		           table2.addCell(String.valueOf(groupInsurance));
   		           
   		           table2.addCell(String.valueOf("House Rent Allowance"));
 		           table2.addCell(String.valueOf(houseRentAllowance));
 		           table2.addCell(String.valueOf(houseRentAllowance));
 		           table2.addCell(String.valueOf("EPF 12%"));
		           table2.addCell(String.valueOf(epf));

		           table2.addCell(String.valueOf("Dearness Allowance"));
    		       table2.addCell(String.valueOf(dearnessAllowance));
    		       table2.addCell(String.valueOf(dearnessAllowance));
    		       table2.addCell(String.valueOf("ESIC 0.75%"));
   		           table2.addCell(String.valueOf(esic));
   		           
   		           table2.addCell(String.valueOf("Spl Allowance"));
 		           table2.addCell(String.valueOf(splAllowance));
 		           table2.addCell(String.valueOf(splAllowance));
 		           table2.addCell(String.valueOf("Medical Insurance"));
		           table2.addCell(String.valueOf(medicalInsurance));
		           
		           table2.addCell(String.valueOf("Childer Education Allowance"));
    		       table2.addCell(String.valueOf(childrenEducationAllowance));
    		       table2.addCell(String.valueOf(childrenEducationAllowance));
    		       table2.addCell(String.valueOf("Tax Deducted At Source"));
   		           table2.addCell(String.valueOf(taxDeductedAtSources));


   		          table2.addCell(String.valueOf("Incendtives"));
 		          table2.addCell(String.valueOf(incentives));
 		          table2.addCell(String.valueOf(incentives));
 		          table2.addCell(String.valueOf(""));
		          table2.addCell(String.valueOf(""));
   		       
		          
		          table2.addCell(String.valueOf("Total"));
		          double total=basicSalary+houseRentAllowance+dearnessAllowance+splAllowance+childrenEducationAllowance+incentives;
 		          table2.addCell(String.valueOf(total));
 		          table2.addCell(String.valueOf(total));
 		          table2.addCell(String.valueOf("Total"));
 		          
 		         double total2=groupInsurance+epf+esic+medicalInsurance+taxDeductedAtSources;
		          table2.addCell(String.valueOf(total2));
   		       
   		          
  		           document.add(table2);
         		
//  		         PdfPTable table3 = new PdfPTable(1);
//		         table3.setWidthPercentage(100f);
//     		     table3.setWidths(new int[] {12});
//     		     table3.setSpacingBefore(1);
//     		     PdfPCell cell3=new PdfPCell();
//     		     
//     		     table3.addCell(String.valueOf(" "));
//     		   // table3.addCell(String.valueOf("Testing"));
//     		     document.add(table3);
//     		    
     		     
     		     PdfPTable table4 = new PdfPTable(1);
		         table4.setWidthPercentage(100f);
    		     table4.setWidths(new int[] {12});
    		     table4.setSpacingBefore(1);
    		     PdfPCell cell4=new PdfPCell();
    		     
    		     table4.addCell(String.valueOf("       "));
    		     table4.addCell(String.valueOf("EPF Employer's Contribution 12%\r\n = "+epf));
    		     double esic2=salaryObj.getEsic3();
    		     double esic3=grossSalary*esic2/100;
    		     table4.addCell(String.valueOf("ESIC Employers Contribution 3.25 ="+"   "+ esic3));
    		     
    		     double monthCTC=grossSalary+epf+esic3;
    		     table4.addCell(String.valueOf("Monthly CTC Salary : Rs = "+ monthCTC));
    		     table4.addCell(String.valueOf("_"));
    		     double net=total-total2;
    		     table4.addCell(String.valueOf("Net Amount to Disbursed ="+net ));
    		     table4.addCell(String.valueOf("_"));
    		    
    		     document.add(table4);
     		    
				   document.close();
					
			 return new ByteArrayInputStream(out.toByteArray());
				
				
				}
				

}








