package fr.solutec;

import java.time.ZonedDateTime;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import fr.solutec.entities.Candidat;
import fr.solutec.entities.Conseiller;
import fr.solutec.repository.CandidatRepository;
import fr.solutec.repository.ConnexionRepository;
import fr.solutec.repository.ConseillerRepository;
import fr.solutec.repository.RdvRepository;

@SpringBootApplication
public class ProjetDev06Application implements CommandLineRunner {

	@Autowired
	private CandidatRepository candiRepo;
	@Autowired
	private ConnexionRepository connexionRepo;
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
<<<<<<< HEAD


/*		System.out.println(ZonedDateTime.now());
	
		Candidat c1 = new Candidat(null, null, null, false, "chameau@mail.fr", "lama", "Chameau", 0, 0, 0, 0, "Lama", null, 0, null, null, null, null, null, null, null, true, false, null, null, null, false, null, 0, 0, 0, false, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null);
		candiRepo.save(c1);
		System.out.println(c1);
		Candidat c2 = new Candidat(null, null, null, false, "league@mail.fr", "lol", "Yasuo", 0, 0, 0, 0, "Garen", null, 0, null, null, null, null, null, null, null, false, false, null, null, null, false, null, 0, 0, 0, false, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null);
		candiRepo.save(c2);
		System.out.println(c2);
	
		Inscription i1 = new Inscription(null,"nicolas@yahoo.fr","james");
		inscriRepo.save(i1);
		
		Connexion co1 = new Connexion(null,"burtz","nicolas", "nicolas@yahoo.fr", "11", "11");
		connexionRepo.save(co1);
		System.out.println(co1); 
*/
		System.out.println(ZonedDateTime.now());

		DateFormat d = new SimpleDateFormat("dd/MM/yyyy"); 
=======
		/*
>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git
		Candidat cd1 = new Candidat(null, "league@mail.fr", "lol", "Yasuo", "Garen", null);
		candidatRepo.save(cd1);
		Candidat cd2 = new Candidat(null, "juliette.nelm@gmail.com", "juju", "Nami", "Jinx", null);
		candidatRepo.save(cd2);
		Conseiller cs1 = new Conseiller(null, "league@mail.fr", "lol", "Yasuo", "Garen");
		conRepo.save(cs1);
		Conseiller cs2 = new Conseiller(null, "juliette.pims@gmail.com", "pims", "Kindred", "Zyra");
		conRepo.save(cs2);
<<<<<<< HEAD
//		Rdv r1 = new Rdv(null, new Date(), "RDV administratif", cs1, null, null, cs2, cd1, "rdv@teams.fr", "Message additionel");
//		rdv.save(r1);
//		Rdv r2 = new Rdv(null, new Date(), "Entretien test", cs2, null, null, cs2, cd2, "rdv@teams.fr", "Préparez-vous bien");
//		System.out.println(ZonedDateTime.now());		
//		Candidat c1 = new Candidat(null,d.parse("14/07/2018"));
//		candidatRepo.save(c1);	

	}
=======
		Rdv r1 = new Rdv(null, new Date(), "RDV administratif", cs1, cd1, "rdv@teams.fr", "Message additionel");
		rdv.save(r1);
		Rdv r2 = new Rdv(null, new Date(), "Entretien test", cs2, cd2, "rdv@teams.fr", "Préparez-vous bien");
		*/

>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git
		
	}


