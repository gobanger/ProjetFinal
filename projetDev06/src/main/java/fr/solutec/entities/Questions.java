package fr.solutec.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor @AllArgsConstructor @Data
@Entity


public class Questions {
	@Id @GeneratedValue
	private Long idquestion;
	private String question;
	private List formation;
	private String bonnereponse;


public void AllQuestions(Long idquestion, String question, List formation, String bonnereponse) {
	this.idquestion=idquestion;
	this.question=question;
	this.formation=formation;
	this.bonnereponse=bonnereponse;
}
	public static void main(String args[]) 
    { 
        List<String> Formations = new ArrayList<String>(){
          {
           add("Expert en systèmes d'information");
           add("Administrateur réseau");
           add("TSSR");
           add("Concepteur développeur d'application");
          }
        };
	
}
}