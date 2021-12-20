package fr.solutec.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import fr.solutec.entities.enums.Langue;
import fr.solutec.entities.enums.NiveauLangue;
import fr.solutec.entities.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor @AllArgsConstructor @Data
@Entity

public class Candidat {
	private Role role = Role.CANDIDAT;
	
	@Id @GeneratedValue
	private Long idCandidat;
	@CreationTimestamp
	private Date dateCandidature;
	private boolean civ;
	private String nomUsage; 
	private String nomNaissance;
	private String prenom;
	private int age;

	private int anneeNaissance;
	private int moisNaissance;
	private int jourNaissance;
	
	private String lieuNaissance;
	private String Adresse;
	private int codePostal;
	private String Ville;
	private String telFixe;
	private String telPortable;
	private String mail;
	private String nationalité;
	
	
	private Long numSecuSocial;
	private String situationActuelle;
		
	private boolean handicap;
	private boolean organisme;
	private String nomOrganisme;
	private String coordOrganisme;
	private String besoinParticulier;
	
	private boolean poleEmploi;
	private String identifiantPoleEmploi;
	private int anneePoleEmploi;
	private int moisPoleEmploi;
	private int jourPoleEmploi;
	private boolean missionLocal;
	private String coordMissionLocal;
	private String nomConseillerMissionLocal;
	
	private String derniereClasse;
	private String diplome1;
	private String diplome2;
	private String diplome3;
	private float dureeExperience;  // en année genre 1.5 
	
	private NiveauLangue  niveauFrancais;
	private NiveauLangue  niveauAnglais;
	
	private Langue langue1;
	private NiveauLangue  niveau1;
	private Langue langue2;
	private NiveauLangue  niveau2;
	private Langue langue3;
	private NiveauLangue  niveau3;
	private Langue langue4;
	private NiveauLangue  niveau4;
	
	
	
	
	
	
	
	
	
	
	
	

	
}
