//package com.employee.entities;
//
//import java.time.LocalDate;
//import java.time.Period;
//import java.util.Calendar;
//
//import java.util.Date;
//
//import jakarta.validation.ConstraintValidator;
//import jakarta.validation.ConstraintValidatorContext;
//
//public class BirthDateValidator implements ConstraintValidator<BirthDate, LocalDate> {
//
//	@Override
//	public boolean isValid(LocalDate value, ConstraintValidatorContext context) {
//		// TODO Auto-generated method stub
////		 Calendar dateInCalendar = Calendar.getInstance();
////		    dateInCalendar.set(value);;
////
////		    return Calendar.getInstance().get(Calendar.YEAR) - dateInCalendar.get(Calendar.YEAR) >= 18;
////         
//		LocalDate today=LocalDate.now();
//		 Period age = Period.between(dateOfBirth, today);
//		    if (age.getYears() < 18) {
//		        throw new UnderAgeException();
//		    }
//		
//
//	}
//	
//
//}
//
