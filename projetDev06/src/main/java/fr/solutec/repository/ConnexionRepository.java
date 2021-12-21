package fr.solutec.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import fr.solutec.entities.Connexion;

public interface ConnexionRepository extends CrudRepository<Connexion, Long> {

	
	@Query(value = "SELECT p FROM Connexion p WHERE p.mail = ?1 AND p.mdp = ?2")
	public Connexion getByLoginAndPassword(String mail, String mdp);
}

