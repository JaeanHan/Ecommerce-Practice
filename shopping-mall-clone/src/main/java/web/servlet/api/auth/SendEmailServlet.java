package web.servlet.api.auth;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import web.mail.MailSend;

@WebServlet("/api/v1/email")
public class SendEmailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		MailSend mailSend = new MailSend();
		
		String receiver = request.getParameter("email"); // String		
		
		String result = mailSend.sendMailNaver(receiver);
		
		response.setContentType("text/plain; charset=UTF-8");
		
		response.getWriter().print(result);
		
	}

}
