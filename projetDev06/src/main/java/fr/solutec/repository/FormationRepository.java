package fr.solutec.repository;

import org.springframework.data.repository.CrudRepository;
import fr.solutec.entities.Formation;


public interface FormationRepository extends CrudRepository<Formation, Long> {

}
