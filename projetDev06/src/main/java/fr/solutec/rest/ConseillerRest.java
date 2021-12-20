package fr.solutec.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.solutec.entities.Rdv;
import fr.solutec.repository.ConseillerRepository;

@RestController

@CrossOrigin("*")
public class ConseillerRest {

	@Autowired
	private ConseillerRepository conseillerRep;
	
	@PostMapping("conseiller/creation_rdv")
	public Rdv creationRdv(@RequestBody Rdv r) {
		return r;
	}
}
