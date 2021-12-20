package fr.solutec.entities;

import java.util.Date;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
public class Rdv {
	
	@Id @GeneratedValue
	private Long id;
	private Date date;
	private String sujet;
	@ManyToMany
	private Conseiller emetteur;
	//private Conseiller emetteur;
	private Candidat destinataire;
	private String lien;
	private String message;
}
