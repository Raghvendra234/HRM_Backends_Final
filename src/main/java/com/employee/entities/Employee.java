package com.employee.entities; 

import java.time.LocalDate;


import java.util.Date;

import java.util.List;

import org.hibernate.validator.constraints.UniqueElements;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="employee")
public class Employee
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int    employeeId;
	
	@NotEmpty
	@Size(min=2,message = "first name must be min 2 character")
	private String  firstName;
	
	@NotEmpty(message = "Lastname is mandatory")
	private String lastName;
	
	@NotEmpty
	@Pattern(regexp="(^$|[0-9]{10})",message = "contact no must be 10 digit")
	private String  contact;
	
	@NotEmpty
	@Email(message = "Please enter a valid e-mail address")
//	@Column(unique=true)
	private String emailId;
	
	@NotEmpty
	@Pattern(regexp="(^$|[0-9]{12})",message = "adhar no must be 12 digit")
	private String  aadharCard;
	
	@NotEmpty
	@Pattern(regexp="(^$|[a-z][A-Z][0-9]{10})",message = "pan card no must be 10 digit")
	private String panCard;
	@NotEmpty
	private String  bankName;
	@NotEmpty
	@Size(min=9,max=18,message = "account no should be 9 to 18 digit")
	private String accountNumber;
	

	@NotEmpty
	private String cifNumber;
	private String toatalExperience;

	private String  experience;
	private String  previousCompanyName;

	@NotEmpty
	private String  designation;
	@NotEmpty
	private String  password;

    @NotEmpty
	private String  gender;
	
	@NotNull(message = "The date of birth is required.")
	@Past(message = "The date of birth must be in the past.")
	private LocalDate dateOfBirth;

    private boolean isDeleted=false;
	
    
    
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Address> address;

	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Qualification> qualification; 	
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<EmployeeExperience> employeeExperiences;
	
	@OneToMany(targetEntity = FileStorage.class)
	private List<FileStorage> fileStorage;
	
	
//	@ManyToMany(targetEntity=ProjectDetails.class, cascade = {CascadeType.ALL}) 
//	private List<ProjectDetails> projectDetails;
	

}
