package web.mail;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

public class MailAuth extends Authenticator{
	private PasswordAuthentication pa;
	
	public MailAuth() {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String email = "jaean1999@naver.com";
		System.out.println("비밀번호를 입력해주세요.");
		String password = null;
		
		try {
			password = br.readLine();
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		pa = new PasswordAuthentication(email, password);
	}
	
	public PasswordAuthentication getPasswordAuthentication() {
		return pa;
	}
}
