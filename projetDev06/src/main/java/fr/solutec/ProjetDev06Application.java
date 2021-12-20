package fr.solutec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fr.solutec.entities.Candidat;
<<<<<<< HEAD
import fr.solutec.repository.CandidatRepository;

=======
import fr.solutec.entities.Inscription;
import fr.solutec.repository.CandidatRepository;
import fr.solutec.repository.InscriptionRepository;
>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git



@SpringBootApplication
public class ProjetDev06Application implements CommandLineRunner {
	@Autowired
<<<<<<< HEAD
	private CandidatRepository candidatRepo;
=======
	private InscriptionRepository inscriRepo;
	@Autowired
	private CandidatRepository candiRepo;
>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git

	public static void main(String[] args) {
		SpringApplication.run(ProjetDev06Application.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("lancement projet OK");
	//	System.out.println(ZonedDateTime.now());
<<<<<<< HEAD
	
=======
		Candidat c1 = new Candidat(null, "chameau@mail.fr", "lama", "Chameau", "Lama", true);
		candiRepo.save(c1);
		Candidat c2 = new Candidat(null, "league@mail.fr", "lol", "Yasuo", "Garen", false);
		candiRepo.save(c2);
		
	}
>>>>>>> branch 'master' of https://github.com/gobanger/ProjetFinal.git

	
	Candidat i = new Candidat(null,null,"bond","james");
	candidatRepo.save(i);  // pourquoi je ne peux pas creer comme ça ?
	
	}
}
