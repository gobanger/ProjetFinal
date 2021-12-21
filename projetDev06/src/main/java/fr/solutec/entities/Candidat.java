package fr.solutec.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import fr.solutec.entities.enums.Langue;
import fr.solutec.entities.enums.NiveauLangue;
import fr.solutec.entities.enums.Permis;
import fr.solutec.entities.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor @AllArgsConstructor @Data
@Entity

public class Candidat {
	private Role role;
	@Id @GeneratedValue
	private Long id;
	private String mdp;
	@CreationTimestamp
	private Date dateCandidature; //TEST
	
	private boolean civ;
	private String nomUsage; 
	private String nomNaissance;
	private String prenom;
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	private int age;
	
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
		
	private String nomRepresentant;
	private String prenomRepresentant;
	private String typeRepresentant;
	private String adresseRepresentant;
	private int codePostalRepresentant;
	private String villeRepresentant;
	private String telFixeRepresentant;
	private String telPortableRepresentant;
	private String emailRepresentant;
	
	private boolean handicap;
	private boolean organisme;
	private String nomOrganisme;
	private String coordOrganisme;
	private String besoinParticulier;
	
	private boolean poleEmploi;
	private String identifiantPoleEmploi;
	@Temporal(TemporalType.DATE)
	private Date inscriptionPoleEmploi;
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
	private NiveauLangue niveau1;
	private Langue langue2;
	private NiveauLangue niveau2;
	private Langue langue3;
	private NiveauLangue niveau3;
	private Langue langue4;
	private NiveauLangue niveau4;
	
	private boolean contactEntreprise;
	private int nombreContactEntreprise;
	
	private boolean trouveEntreprise;
	private String nomEntreprise;
	private String adresseSiegeSocial;
	private String adresseEntreprise;  // l'adresse ou l'étudiant va travailler
	private boolean contratSigne;
	@Temporal(TemporalType.DATE)
	private Date dateDemarrageContrat;
	private String nomContact;
	private String prenomContact;
	private String fonctionContact;
	private String telContact;
	private String mailContact;
	private Permis permis;
	private boolean vehicule;
	private String connaissanceEsic;
	
	private String question1;
	private String question2;
	private String question3;
	private String question4;
	private String question5;
	private String question6;
	private String question7;
	private String question8;
	
	private String commentaire;
	
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
