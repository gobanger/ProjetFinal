package fr.solutec;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import fr.solutec.entities.Candidat;
import fr.solutec.entities.Conseiller;
import fr.solutec.entities.Rdv;
import fr.solutec.repository.CandidatRepository;
import fr.solutec.repository.ConseillerRepository;
import fr.solutec.repository.RdvRepository;
import fr.solutec.rest.RdvRest;


@SpringBootApplication
public class ProjetDev06Application implements CommandLineRunner {
	@Autowired
	RdvRepository rdv;
	@Autowired
	CandidatRepository candRepo;
	@Autowired
	ConseillerRepository conRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(ProjetDev06Application.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("lancement projet OK");
		Candidat cd1 = new Candidat(null, "league@mail.fr", "lol", "Yasuo", "Garen", null);
		candRepo.save(cd1);
		Candidat cd2 = new Candidat(null, "juliette.nelm@gmail.com", "juju", "Nami", "Jinx", null);
		candRepo.save(cd2);
		Conseiller cs1 = new Conseiller(null, "league@mail.fr", "lol", "Yasuo", "Garen");
		conRepo.save(cs1);
		Conseiller cs2 = new Conseiller(null, "juliette.pims@gmail.com", "pims", "Kindred", "Zyra");
		conRepo.save(cs2);
		Rdv r1 = new Rdv(null, new Date(), "RDV administratif", cs1, cd1, "rdv@teams.fr", "Message additionel");
		rdv.save(r1);
		Rdv r2 = new Rdv(null, new Date(), "Entretien test", cs2, cd2, "rdv@teams.fr", "Préparez-vous bien");
		
		/*
		String contenu = "Bonjour " + r2.getDestinataire().getPrenom()
				+ " " + r2.getDestinataire().getNomUsage()
				+ ",\nVous êtes convoqué pour un entretien visio via Teams à la date du "
				+ r2.getDate() +".\n"
				+ "Vous trouverez le lien de la réunion ci-dessous : \n"
				+ r2.getLien()
				+ r2.getMessage() + "\nCordialement\n,"
				+ r2.getEmetteur().getPrenom() + " " + r2.getEmetteur().getNom();*/
		//rdvR.sendMail(r2.getDestinataire().getMail(), r2.getObjet(), contenu);
		//rdvR.sendMail("juliette.nelm@gmail.com", "objet test", "CHAMEAU");
	}
}
