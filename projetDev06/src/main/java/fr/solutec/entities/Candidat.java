package fr.solutec.entities;

import java.util.Date;

import javax.persistence.Column;
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
	@Column(unique=true)
	private String mail;
	private String mdp;
	@CreationTimestamp
	private Date dateCandidature;
	private boolean civ;
	private String nomUsage; 
	private String nomNaissance;
	private String prenom;
	/*
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	private int age;
	
	private String lieuNaissance;
	private String Adresse;
	private int codePostal;
	private String Ville;
	private String telFixe;
	private String telPortable;
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

	public Candidat(Long id, String mdp, Date dateCandidature, boolean civ, String nomUsage, String nomNaissance,
			String prenom, Date dateNaissance, int age, String lieuNaissance, String adresse, int codePostal,
			String ville, String telFixe, String telPortable, String mail, String nationalité, Long numSecuSocial,
			String situationActuelle, String nomRepresentant, String prenomRepresentant, String typeRepresentant,
			String adresseRepresentant, int codePostalRepresentant, String villeRepresentant,
			String telFixeRepresentant, String telPortableRepresentant, String emailRepresentant, boolean handicap,
			boolean organisme, String nomOrganisme, String coordOrganisme, String besoinParticulier, boolean poleEmploi,
			String identifiantPoleEmploi, Date inscriptionPoleEmploi, boolean missionLocal, String coordMissionLocal,
			String nomConseillerMissionLocal, String derniereClasse, String diplome1, String diplome2, String diplome3,
			float dureeExperience, NiveauLangue niveauFrancais, NiveauLangue niveauAnglais, Langue langue1,
			NiveauLangue niveau1, Langue langue2, NiveauLangue niveau2, Langue langue3, NiveauLangue niveau3,
			Langue langue4, NiveauLangue niveau4, boolean contactEntreprise, int nombreContactEntreprise,
			boolean trouveEntreprise, String nomEntreprise, String adresseSiegeSocial, String adresseEntreprise,
			boolean contratSigne, Date dateDemarrageContrat, String nomContact, String prenomContact,
			String fonctionContact, String telContact, String mailContact, Permis permis, boolean vehicule,
			String connaissanceEsic, String question1, String question2, String question3, String question4,
			String question5, String question6, String question7, String question8, String commentaire) {
		this.role = Role.CANDIDAT;
		this.id = id;
		this.mdp = mdp;
		this.dateCandidature = dateCandidature;
		this.civ = civ;
		this.nomUsage = nomUsage;
		this.nomNaissance = nomNaissance;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.age = age;
		this.lieuNaissance = lieuNaissance;
		Adresse = adresse;
		this.codePostal = codePostal;
		Ville = ville;
		this.telFixe = telFixe;
		this.telPortable = telPortable;
		this.mail = mail;
		this.nationalité = nationalité;
		this.numSecuSocial = numSecuSocial;
		this.situationActuelle = situationActuelle;
		this.nomRepresentant = nomRepresentant;
		this.prenomRepresentant = prenomRepresentant;
		this.typeRepresentant = typeRepresentant;
		this.adresseRepresentant = adresseRepresentant;
		this.codePostalRepresentant = codePostalRepresentant;
		this.villeRepresentant = villeRepresentant;
		this.telFixeRepresentant = telFixeRepresentant;
		this.telPortableRepresentant = telPortableRepresentant;
		this.emailRepresentant = emailRepresentant;
		this.handicap = handicap;
		this.organisme = organisme;
		this.nomOrganisme = nomOrganisme;
		this.coordOrganisme = coordOrganisme;
		this.besoinParticulier = besoinParticulier;
		this.poleEmploi = poleEmploi;
		this.identifiantPoleEmploi = identifiantPoleEmploi;
		this.inscriptionPoleEmploi = inscriptionPoleEmploi;
		this.missionLocal = missionLocal;
		this.coordMissionLocal = coordMissionLocal;
		this.nomConseillerMissionLocal = nomConseillerMissionLocal;
		this.derniereClasse = derniereClasse;
		this.diplome1 = diplome1;
		this.diplome2 = diplome2;
		this.diplome3 = diplome3;
		this.dureeExperience = dureeExperience;
		this.niveauFrancais = niveauFrancais;
		this.niveauAnglais = niveauAnglais;
		this.langue1 = langue1;
		this.niveau1 = niveau1;
		this.langue2 = langue2;
		this.niveau2 = niveau2;
		this.langue3 = langue3;
		this.niveau3 = niveau3;
		this.langue4 = langue4;
		this.niveau4 = niveau4;
		this.contactEntreprise = contactEntreprise;
		this.nombreContactEntreprise = nombreContactEntreprise;
		this.trouveEntreprise = trouveEntreprise;
		this.nomEntreprise = nomEntreprise;
		this.adresseSiegeSocial = adresseSiegeSocial;
		this.adresseEntreprise = adresseEntreprise;
		this.contratSigne = contratSigne;
		this.dateDemarrageContrat = dateDemarrageContrat;
		this.nomContact = nomContact;
		this.prenomContact = prenomContact;
		this.fonctionContact = fonctionContact;
		this.telContact = telContact;
		this.mailContact = mailContact;
		this.permis = permis;
		this.vehicule = vehicule;
		this.connaissanceEsic = connaissanceEsic;
		this.question1 = question1;
		this.question2 = question2;
		this.question3 = question3;
		this.question4 = question4;
		this.question5 = question5;
		this.question6 = question6;
		this.question7 = question7;
		this.question8 = question8;
		this.commentaire = commentaire;
	}
	*/
	public Candidat(Long id, String mail, String mdp, Date dateCandidature, boolean civ, String nomUsage,
			String nomNaissance, String prenom) {
		this.role = Role.CANDIDAT;
		this.id = id;
		this.mail = mail;
		this.mdp = mdp;
		this.dateCandidature = dateCandidature;
		this.civ = civ;
		this.nomUsage = nomUsage;
		this.nomNaissance = nomNaissance;
		this.prenom = prenom;
	}
	
	
	
	
}
