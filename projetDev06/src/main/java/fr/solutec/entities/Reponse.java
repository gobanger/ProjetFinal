package fr.solutec.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor @AllArgsConstructor @Data
@Entity

public class Reponse {
	@Id @GeneratedValue
	private Long idReponse;
	private String intitule; //private String intitule;
	@OneToOne Long idquestion;
	private Boolean type;
	
}