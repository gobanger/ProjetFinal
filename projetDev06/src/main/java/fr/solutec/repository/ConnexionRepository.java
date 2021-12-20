package fr.solutec.repository;

import org.springframework.data.repository.CrudRepository;

import fr.solutec.entities.Connexion;

public interface ConnexionRepository extends CrudRepository<Connexion, Long> {

}

/*
public static User findByLoginAndPassword(String log, String mdp) throws SQLException{
User u = null;

String sql = "SELECT * FROM person WHERE login = ? AND password = ?";

Connection connexion = AccessBd.getConnection();
PreparedStatement prepare = connexion.prepareStatement(sql);
prepare.setString(1, log);
prepare.setString(2, mdp);

ResultSet rs = prepare.executeQuery();

if(rs.next()){
   u= new User();
   u.setId(rs.getInt("idperson"));
   u.setNom(rs.getString("nom"));
   u.setPrenom(rs.getString("prenom"));
   u.setLogin(rs.getString("login"));
}

return u;
}
*/