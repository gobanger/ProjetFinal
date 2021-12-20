package fr.solutec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import fr.solutec.entities.Candidat;
import fr.solutec.repository.CandidatRepository;

@SpringBootApplication
public class ProjetDev06Application implements CommandLineRunner {
	private CandidatRepository candidatRepo;
	@Autowired
	private CandidatRepository candiRepo;

	public static void main(String[] args) {
		SpringApplication.run(ProjetDev06Application.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("lancement projet OK");
	}
}
