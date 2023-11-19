package com.employee.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.Date;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.employee.entities.ErrorResponse;
import com.employee.entities.NoSuchEmailExistsException;
import org.springframework.web.context.request.WebRequest;

import com.employee.entities.BadRequestException;
import com.employee.entities.EmailAlreadyExistException;
import com.employee.entities.NoSuchEmailExistsException;

@RestControllerAdvice
public class GlobleExceptionHandler 
{
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, String>> handleMethodArgsNotValidException(MethodArgumentNotValidException ex)
	{
		
		Map<String,String> resp=new HashMap<>();
		
		    
		    ex.getBindingResult().getAllErrors().forEach((error)->{
			String FieldName=((FieldError)error).getField();
			String message=error.getDefaultMessage();
			System.out.println("fieldName"+FieldName);
			resp.put("message", message);
			
		});
		
		return new ResponseEntity<Map<String,String>>(resp,HttpStatus.BAD_REQUEST);


	}	


	
	
	

	
     
 
//	@ExceptionHandler(value = BadRequestException.class)
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//	public @ResponseBody ErrorResponse     handleException(BadRequestException ex)
//    {
//        return new ErrorResponse(
//            HttpStatus.BAD_REQUEST.value(), ex.getMessage());
//    }


     
//	@ExceptionHandler(MethodArgumentNotValidException.class)
//	 	public @ResponseBody ErrorResponse handleMethodArgsNotValidException(MethodArgumentNotValidException ex){
//		
//		Map<String,String> resp=new HashMap<>();
//		ex.getBindingResult().getAllErrors().forEach((error)->{
//			String FieldName=((FieldError)error).getField();
//			String message=error.getDefaultMessage();
//			resp.put(FieldName, message);
//		});
//		
//		 return new ErrorResponse(
//		            HttpStatus.BAD_REQUEST.value(),ex.getMessage());}
//     
	@ExceptionHandler(value
            = BadRequestException.class)
@ResponseStatus(HttpStatus.BAD_REQUEST)
	public @ResponseBody ErrorResponse
    handleException(BadRequestException ex)
    {
        return new ErrorResponse(
            HttpStatus.BAD_REQUEST.value(), ex.getMessage());
    }

 
//	@ExceptionHandler(value = BadRequestException.class)
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//	public @ResponseBody ErrorResponse     handleException(BadRequestException ex)
//    {
//        return new ErrorResponse(
//            HttpStatus.BAD_REQUEST.value(), ex.getMessage());
//    }




	@ExceptionHandler(value=Exception.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public @ResponseBody ErrorResponse handleInternalException(Exception ex) {
		
		ex.printStackTrace();
		return new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),"Something went wrong");
	}
}
//,"Something went wrong"
