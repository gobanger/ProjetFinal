package fr.solutec.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import fr.solutec.entities.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

	@NoArgsConstructor @AllArgsConstructor @Data
	@Entity
	public class Inscription {
		@Id @GeneratedValue
		private Long id;
		private String nom;
		private String prenom;
		private String mail;  //envoyer un mail de vérif demander juju
		private String mdp;
		private Role role;
					
	}

