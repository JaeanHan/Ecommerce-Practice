package service.user;

import domain.entity.User;
import web.dto.SignupReqDto;

public interface UserService {
	public boolean createUser(SignupReqDto user) throws Exception;
	
	public void getUser() throws Exception;
	public boolean checkusername(String username) throws Exception;
	
	public boolean updateuser() throws Exception;
	
	public boolean deleteUser() throws Exception;
	
	public User loadUser(String username, String password) throws Exception;
}
