package fr.solutec.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.solutec.entities.Utilisateur;
import fr.solutec.repository.UtilisateurRepository;

@RestController

@CrossOrigin("*")
public class UtilisateurRest {

	@Autowired
	UtilisateurRepository userRepo;
	
	@GetMapping("inscription")
	public Iterable<Utilisateur> getAllInscription(){
		return userRepo.findAll();
	}
	
	@PostMapping("inscription")
	public Utilisateur createUtilisateur(@RequestBody Utilisateur in) {
		userRepo.save(in);
		return in;
}
	
	@PostMapping("connexion")
	public Utilisateur connect(@RequestBody Utilisateur p) {
		return userRepo.getByLoginAndPassword(p.getMail(), p.getMdp());
		}
	
}
