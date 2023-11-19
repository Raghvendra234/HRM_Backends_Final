package com.employee.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ProjectDetails 
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int projectId;

    
	private String projectName;
	private String clientName;
	private String teamLeader;
	
//	private List<String> developingTechnology;
//	private List<String> databaseTechnology;
	
    private LocalDate fromDate, toDate;
	public String projectManager;
	private boolean isDeleted=false;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Technologies> technology;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<DatabasesTech> databaseTech;
	

}
