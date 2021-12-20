package fr.solutec.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor @Data
@Entity
public class Candidat {
	private Role role;
	@Id @GeneratedValue
	private Long id;
	private String mail;
	private String mdp;
	private String nomUsage;
	//private String nomNaissance;
	private String prenom;
	@CreationTimestamp
	private Date dateCandidature;
	//private boolean civ;
	//private int age;
	
	public Candidat(Long id, String mail, String mdp, String nomUsage, String prenom, Date dateCandidature) {
		this.id = id;
		this.mail = mail;
		this.mdp = mdp;
		this.nomUsage = nomUsage;
		this.prenom = prenom;
		this.dateCandidature = dateCandidature;
		this.role = Role.CANDIDAT;
	}
	
	
}
