package fr.solutec;

import java.time.ZonedDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import fr.solutec.entities.Candidat;
import fr.solutec.entities.Connexion;
import fr.solutec.entities.Inscription;
import fr.solutec.repository.CandidatRepository;
import fr.solutec.repository.ConnexionRepository;
import fr.solutec.repository.InscriptionRepository;

@SpringBootApplication
public class ProjetDev06Application implements CommandLineRunner {
	@Autowired
	private CandidatRepository candiRepo;
	@Autowired 
	private InscriptionRepository inscriRepo;
	@Autowired
	private ConnexionRepository connexionRepo;
	

	public static void main(String[] args) {
		SpringApplication.run(ProjetDev06Application.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("lancement projet OK");

//		System.out.println(ZonedDateTime.now());
	
		Candidat c1 = new Candidat(null, null, "chameau@mail.fr", "lama", "Chameau", "Lama", null, null, null, true, 0);
		candiRepo.save(c1);
//		System.out.println(c1);
		Candidat c2 = new Candidat(null, null, "league@mail.fr", "lol", "Yasuo", "Garen", null, null, null, false, 0);
		candiRepo.save(c2);
//		System.out.println(c2);
	
		Inscription i1 = new Inscription(null,"nicolas@yahoo.fr","james");
		inscriRepo.newUser(i1);
	
	
		
		System.out.println(i1);
		
		/* Connexion co1 = new Connexion(null,"burtz","nicolas", "nicolas@yahoo.fr", "11", "11");
		connexionRepo.save(co1);
		System.out.println(co1); */
	}
	
}
