package fr.solutec.entities;

import java.util.Date;
<<<<<<< HEAD
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
=======

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class Rdv {
<<<<<<< HEAD
	
=======
>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git
	@Id @GeneratedValue
	private Long id;
<<<<<<< HEAD
	private Date date;
	private String sujet;
	@ManyToMany
	private Conseiller emetteur;
	//private Conseiller emetteur;
=======
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	private String objet;
	@OneToOne
	private Conseiller emetteur;
	@OneToOne
>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git
	private Candidat destinataire;
	private String lien;
	private String message;
}
