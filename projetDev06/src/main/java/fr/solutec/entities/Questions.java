package fr.solutec.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor @AllArgsConstructor @Data
@Entity


public class Questions {
	@Id @GeneratedValue
	private Long idquestion;
	private String question;
	//@ManyToMany
	private Formation formation;
	private String bonnereponse;


public void AllQuestions(Long idquestion, String question, String bonnereponse) {
	this.idquestion=idquestion;
	this.question=question;
	this.bonnereponse=bonnereponse;
}

	
}
 