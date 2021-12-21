package fr.solutec.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import fr.solutec.repository.InscriptionRepository;
import fr.solutec.entities.*;
import org.springframework.*;

@RestController 
@CrossOrigin("*")  
public class InscriptionRest {

	@Autowired
	private InscriptionRepository inscriRepo;
	
	@GetMapping("inscription")
	public Iterable<Inscription> getAllInscription(){
		return inscriRepo.findAll();
	}
	
	@PostMapping("inscription")
	public Inscription createInscription (@RequestBody Inscription in) {
		inscriRepo.save(in);
		return in;
	}
}
	
	
		

