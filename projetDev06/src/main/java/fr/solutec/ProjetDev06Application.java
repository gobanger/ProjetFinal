package fr.solutec;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fr.solutec.entities.Formation;
import fr.solutec.repository.CandidatRepository;
import fr.solutec.repository.FormationRepository;



@SpringBootApplication
public class ProjetDev06Application implements CommandLineRunner {

	@Autowired

	private CandidatRepository candidatRepo;
	private FormationRepository formationRepo;

	

	public static void main(String[] args) {
		SpringApplication.run(ProjetDev06Application.class, args);
	
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("lancement projet OK");
	//	System.out.println(ZonedDateTime.now());
		
		Formation f1=new Formation(null, "TSSR",5);
		Formation f2=new Formation(null, "concepteur développeur d'application",6);
		Formation f3=new Formation(null, "administrateur réseau",6);
		Formation f4=new Formation(null, "expert en système d'information",7);
		formationRepo.save(f1);
		formationRepo.save(f2);
		formationRepo.save(f3);
		formationRepo.save(f4);
		
	}

}

