package config;

import domain.dao.UserDao;
import domain.dao.UserDaoImpl;
import lombok.Getter;
import service.user.UserService;
import service.user.UserServiceImpl;

@Getter
public class ServletContextConfig {
	private static ServletContextConfig instance = null;
	
	private UserDao userDao;
	private UserService userService;
	
	private ServletContextConfig() {
		
	}
	
	public static ServletContextConfig getInstance() {
		if(instance == null) {
			instance = new ServletContextConfig();
			instance.setIoC();
		}
		return instance;
	}
	
	private void setIoC() {
		if(userDao == null) {
			userDao = new UserDaoImpl();
		}
		
		if(userDao == null) {
			userService = new UserServiceImpl();
		}
	}
}
