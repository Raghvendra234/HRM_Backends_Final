package com.employee.entities;

import jakarta.persistence.Entity;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Qualification 
{
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int qualificationId;



  private String course, board, passingyear, status;
  private double percentage;



@Override
public String toString() {
	return "Qualification [qualificationId=" + qualificationId + ", course=" + course + ", board=" + board
			+ ", passingyear=" + passingyear + ", status=" + status + ", percentage=" + percentage + "]";
}




}
