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

		System.out.println(ZonedDateTime.now());
	/*
		Candidat c1 = new Candidat(null, "chameau@mail.fr", "lama", "Chameau", "Lama", true);
		candiRepo.save(c1);
		Candidat c2 = new Candidat(null, "league@mail.fr", "lol", "Yasuo", "Garen", false);
		candiRepo.save(c2);
	*/
		Inscription i1 = new Inscription(null,"nicolas@yahoo.fr","james");
		inscriRepo.save(i1);
		System.out.println("i1");
		
		Connexion c1 = new Connexion(null,"burtz","nicolas", "nicolas@yahoo.fr", "11", "11");
		connexionRepo.save(c1);
		System.out.println("c1");
	}
	
}
