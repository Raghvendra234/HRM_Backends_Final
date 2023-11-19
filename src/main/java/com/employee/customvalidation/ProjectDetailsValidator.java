package com.employee.customvalidation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ProjectDetailsValidator implements ConstraintValidator<ValidateProject, String>
{

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) 
	{
		
		return false;
	}

}
