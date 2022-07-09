package web.servlet;

import java.io.IOException;
import java.lang.System.Logger;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/index")
public class IndexServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(false);

		request.getRequestDispatcher("/WEB-INF/views/index.jsp").forward(request, response);
		
		Enumeration<String> enum_session = session.getAttributeNames();

		while(enum_session.hasMoreElements()) {
			String key = enum_session.nextElement();
	
			System.out.println("key : " + key);
			System.out.println("value : " + session.getAttribute(key));
		}
	}

}
