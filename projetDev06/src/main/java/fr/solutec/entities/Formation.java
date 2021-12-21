package fr.solutec.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor @AllArgsConstructor @Data
@Entity

public class Formation {
	@Id @GeneratedValue
	private Long idFormation;
	private Formation intitule; //private Formation intitule; 
	private int nivcertif; //private String niveau certification;
}