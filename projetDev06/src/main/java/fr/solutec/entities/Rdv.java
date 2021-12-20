package fr.solutec.entities;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
public class Rdv {

	private Long id;
	//private Date date;
	private String sujet;
	//private Conseiller emetteur;
	private Candidat destinataire;
	private String lien;
	//private String message;
}
