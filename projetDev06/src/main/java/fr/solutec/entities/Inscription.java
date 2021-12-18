package fr.solutec.entities;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data   // automatise les constructor et les getters and setters  (cf Outline)
@Entity
public class Inscription {
	@Id @GeneratedValue 
	private Long idPerson;
	private Date dateCandidature;
	private boolean civ;
	private String nomUsage;
	private String nomNaissance;
	private String prenom;
	private int age;
	
}








