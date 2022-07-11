package web.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import config.ServletContextConfig;
import service.user.UserService;
import service.user.UserServiceImpl;
import web.dto.SignupReqDto;

@WebServlet("/signup")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final UserService userService;
	
	public SignupServlet() {
		userService = ServletContextConfig.getInstance().getUserService();
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("/WEB-INF/views/signup.jsp").forward(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		SignupReqDto signupReqDto = SignupReqDto.builder()
				.name(request.getParameter("name"))
				.email(request.getParameter("email"))
				.username(request.getParameter("username"))
				.password(request.getParameter("password"))
				.build();
		
		try {
			PrintWriter out = response.getWriter();
			
			if(userService.createUser(signupReqDto)) {
				System.out.println("회원가입 성공"); // @Test
				out.print(true);
			} else {
				System.out.println("회원가입 실패");
				out.print(false);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
