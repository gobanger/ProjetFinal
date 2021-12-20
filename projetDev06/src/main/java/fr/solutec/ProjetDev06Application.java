package fr.solutec;


import java.time.ZonedDateTime;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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
	private ConnexionRepository connexionRepo;
	@Autowired
	private CandidatRepository candidatRepo;

	public static void main(String[] args) {
		SpringApplication.run(ProjetDev06Application.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("lancement projet OK");

//		System.out.println(ZonedDateTime.now());
	
		Candidat c1 = new Candidat(null, null, null, false, "chameau@mail.fr", "lama", "Chameau", 0, 0, 0, 0, "Lama", null, 0, null, null, null, null, null, null, null, true, false, null, null, null, false, null, 0, 0, 0, false, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null);
		candiRepo.save(c1);
//		System.out.println(c1);
		Candidat c2 = new Candidat(null, null, null, false, "league@mail.fr", "lol", "Yasuo", 0, 0, 0, 0, "Garen", null, 0, null, null, null, null, null, null, null, false, false, null, null, null, false, null, 0, 0, 0, false, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null);
		candiRepo.save(c2);
//		System.out.println(c2);
	
	//	Inscription i1 = new Inscription(null,"nicolas@yahoo.fr","james");
	//	inscriRepo.save(i1);
	
	
		
	
		
		/* Connexion co1 = new Connexion(null,"burtz","nicolas", "nicolas@yahoo.fr", "11", "11");
		connexionRepo.save(co1);
		System.out.println(co1); */
	//	System.out.println(ZonedDateTime.now());
	
	}
		

	}
