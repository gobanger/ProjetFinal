package fr.solutec;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import fr.solutec.entities.Candidat;
import fr.solutec.entities.Conseiller;
import fr.solutec.entities.Rdv;
import fr.solutec.repository.CandidatRepository;
import fr.solutec.repository.ConseillerRepository;
import fr.solutec.repository.RdvRepository;


@SpringBootApplication
public class ProjetDev06Application implements CommandLineRunner {
	@Autowired
	RdvRepository rdv;
	@Autowired
	CandidatRepository candidatRepo;
	@Autowired
	ConseillerRepository conRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(ProjetDev06Application.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("lancement projet OK");
		Candidat cd1 = new Candidat(null, "league@mail.fr", "lol", "Yasuo", "Garen", null);
		candidatRepo.save(cd1);
		Candidat cd2 = new Candidat(null, "juliette.nelm@gmail.com", "juju", "Nami", "Jinx", null);
		candidatRepo.save(cd2);
		Conseiller cs1 = new Conseiller(null, "league@mail.fr", "lol", "Yasuo", "Garen");
		conRepo.save(cs1);
		Conseiller cs2 = new Conseiller(null, "juliette.pims@gmail.com", "pims", "Kindred", "Zyra");
		conRepo.save(cs2);
		Rdv r1 = new Rdv(null, new Date(), "RDV administratif", cs1, cd1, "rdv@teams.fr", "Message additionel");
		rdv.save(r1);
		Rdv r2 = new Rdv(null, new Date(), "Entretien test", cs2, cd2, "rdv@teams.fr", "Préparez-vous bien");
	//	System.out.println(ZonedDateTime.now());
		
		//Candidat c1 = new Candidat(null,d.parse("14/07/2018"));
		//candidatRepo.save(c1);
		
	}

}
