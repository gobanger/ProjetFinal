package fr.solutec.rest;

import java.util.Properties;

import javax.mail.Session;
import javax.mail.Transport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.internet.InternetAddress;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.PasswordAuthentication;

import fr.solutec.entities.Rdv;
import fr.solutec.repository.RdvRepository;

@RestController

@CrossOrigin("*")
public class RdvRest {

	@Autowired
	private RdvRepository rdvRep;
	private String emetteur = "juliette.pims@gmail.com";
	private String password = "Jaavmc1J!";
	
	public void sendMail(String destinataire, String objet, String contenu) {
		//final String expediteur = "juliette.pims@gmail.com";
		//final String password = "Jaavmc1J!";
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		
		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emetteur, password);
			}
		});
		
		try {
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(emetteur));
			message.addRecipients(Message.RecipientType.TO, InternetAddress.parse(destinataire));
			message.setSubject(objet);
			message.setText(contenu);
			Transport.send(message);
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
	}
	
	@PostMapping("admin/creation_rdv")
	public Rdv creationRdv(@RequestBody Rdv r) {
		rdvRep.save(r);
		String contenu = "Bonjour " + r.getDestinataire().getPrenom()
				+ " " + r.getDestinataire().getNomUsage() + ",\n"
				+ "\nVous êtes convoqué pour un entretien visio via Teams à la date du "
				+ r.getDate() +".\n"
				+ "Vous trouverez le lien de la réunion ci-dessous : \n"
				+ r.getLien() + "\n"
				+ "Pour valider ou refuser ce RDV, connectez-vous à votre espace personnel.\n"
				+ r.getMessage() + "\n\nCordialement,\n\n"
				+ "\t" + r.getEmetteur().getPrenom() + " " + r.getEmetteur().getNom();
		sendMail(r.getDestinataire().getMail(), r.getObjet(), contenu);
		return r;
	}
	
	@GetMapping("candidat/{id}/mes_rdv")
	public Iterable<Rdv> dispAllRdv(@PathVariable Long id) {
		return rdvRep.getRdvForOne(id);
	}
	
	@DeleteMapping("candidat/{id}/mes_rdv")
	public void deleteOneRdv(@RequestBody Rdv r) {
		rdvRep.delete(r);
	}
	
	
	
}