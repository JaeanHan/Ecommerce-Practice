package web.mail;

import java.util.Properties;

import javax.mail.AuthenticationFailedException;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MailSend {
	private Properties props = null;
	private String varificationCode = "false";
	private Authenticator auth = null;
	private MimeMessage mimeMessage = null;
	
	public String sendMailNaver(String receiver) {
		props = new Properties();
		auth = new MailAuth();
		
		props.put("mail.smtp.host", "smtp.naver.com");
		props.put("mail.smtp.port", 587);
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.ssl.protocols", "TLSv1.2");
				
		Session session = Session.getDefaultInstance(props, auth);
		
		mimeMessage = new MimeMessage(session);
		
		try {
			mimeMessage.setFrom(new InternetAddress(((MailAuth)auth).getPasswordAuthentication().getUserName()));
			mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
			
			varificationCode = new GenerateCode().generateCode();
			
			mimeMessage.setSubject("Greeting From Ecommerce Project!");
			
			mimeMessage.setText("Your verification code is : " + varificationCode );
			
			Transport.send(mimeMessage);
			
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		return varificationCode;
	}
	
	public void sendMailGmail(String reciver) {
		System.out.println("Sorry but Forgot Password");
	}
}
