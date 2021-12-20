package fr.solutec.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import fr.solutec.entities.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class Conseiller {
	private Role role;
	@Id @GeneratedValue
	private Long id;
	private String mail;
	private String mdp;
	private String nom;
	private String prenom;
	
	public Conseiller(Long id, String mail, String mdp, String nom, String prenom) {
		this.id = id;
		this.mail = mail;
		this.mdp = mdp;
		this.nom = nom;
		this.prenom = prenom;
		this.role = Role.CONSEILLER_DE_FORMATION;
	}
	
	
	
}
