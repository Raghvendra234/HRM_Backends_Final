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
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class EmployeeExperience {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int experienceId;
	private String  experience;
	private String  previousCompanyName;
    private String previousCompanydesignations;
    
	@Override
	public String toString() {
		return "EmployeeExperience [experienceId=" + experienceId + ", experience=" + experience
				+ ", previousCompanyName=" + previousCompanyName + ", PreviousCompanydesignations="
				+ previousCompanydesignations + "]";
	}
    
    
	
}
