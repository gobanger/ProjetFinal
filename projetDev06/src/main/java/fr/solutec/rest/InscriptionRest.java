package fr.solutec.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.solutec.entities.Inscription;
import fr.solutec.repository.InscriptionRepository;

@RestController 

@CrossOrigin("*")  // pour dire qui a le droit d'acceder au requete de cette classe (on peut mettre une adresse ip)

public class InscriptionRest {
	@Autowired
	private InscriptionRepository inscriptionRepo;
	
	
	@GetMapping("inscription")
	public Iterable<Inscription> getAllInscription(){
		
		return inscriptionRepo.findAll();
	}
	
	@PostMapping("inscription")
	public Inscription createInscription (@RequestBody Inscription i) {
		inscriptionRepo.save(i);
		return i;
		
	}
	
	

}
