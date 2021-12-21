package fr.solutec.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import fr.solutec.entities.Connexion;
import fr.solutec.repository.ConnexionRepository;


@RestController

@CrossOrigin("*")
public class ConnexionRest {
	
	@Autowired
	private ConnexionRepository connexionRepo;
		
	@PostMapping("connexion")
	public Connexion connect(@RequestBody Connexion p) {
		return connexionRepo.getByLoginAndPassword(p.getMail(), p.getMdp());
		}
}

