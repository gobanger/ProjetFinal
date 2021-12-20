package fr.solutec.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.solutec.entities.Candidat;
import fr.solutec.repository.CandidatRepository;


@RestController 

@CrossOrigin("*")  // pour dire qui a le droit d'acceder au requete de cette classe (on peut mettre une adresse ip)

public class CandidatRest {
	@Autowired
	private CandidatRepository inscriptionRepo;
	
	
	@GetMapping("candidat")
	public Iterable<Candidat> getAllInscription(){
		
		return inscriptionRepo.findAll();
	}
	
	@PostMapping("candidat")
	public Candidat createInscription (@RequestBody Candidat i) {
		inscriptionRepo.save(i);
		return i;
		
	}
	
	

}
