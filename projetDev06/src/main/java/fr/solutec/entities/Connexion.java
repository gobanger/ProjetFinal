package fr.solutec.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

	@NoArgsConstructor @AllArgsConstructor @Data
	@Entity
	public class Connexion {
		@Id @GeneratedValue
		private Long id;
		private String nom;
		private String prenom;
		private String mail;  //envoyer un mail de vérif
		private String mdp;
		private String verifMdp;		
	}