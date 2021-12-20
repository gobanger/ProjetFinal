package fr.solutec.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import fr.solutec.entities.Inscription;


public interface InscriptionRepository extends CrudRepository<Inscription, Long> {

	
	@Query(value = "INSERT INTO Inscription(mail, mdp) VALUES (?1, ?2)", nativeQuery = true)
    public List<Inscription> newUser(String mail, String mdp);

	

}	   