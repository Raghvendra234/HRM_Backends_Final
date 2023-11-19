//package com.employee.entities;
//
//import java.lang.annotation.Documented;
//
//import java.lang.annotation.ElementType;
//import java.lang.annotation.Retention;
//import java.lang.annotation.RetentionPolicy;
//import java.lang.annotation.Target;
//
//import jakarta.validation.Constraint;
//import jakarta.validation.Payload;
//
//@Constraint(validatedBy = BirthDateValidator.class)
//@Target({ ElementType.TYPE, ElementType.FIELD, ElementType.ANNOTATION_TYPE })
//@Retention(RetentionPolicy.RUNTIME)
//@Documented
//public @interface BirthDate {
//	String message() default "{com.employee.entities.BirthDate.message}";
//	 Class <?> [] groups() default {};
//	  Class <? extends Payload> [] payload() default {};
//	
//}
