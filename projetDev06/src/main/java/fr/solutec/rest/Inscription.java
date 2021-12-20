package fr.solutec.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import fr.solutec.repository.InscriptionRepository;

@RestController 
@CrossOrigin("*")  
public class Inscription {
	
	@Autowired
	private InscriptionRepository inscriRepo;
	
	@GetMapping("inscription")
	public Iterable<fr.solutec.entities.Inscription> getAllInscription(){
		return inscriRepo.findAll();
	}
	
	@PostMapping("inscription")
	public Inscription createInscription (@RequestBody Inscription i) {
		inscriRepo.save(i);
		return i;
	}
	
	
	
		
}
