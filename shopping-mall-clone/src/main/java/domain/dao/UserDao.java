package domain.dao;

import domain.entity.User;

public interface UserDao {
	public int save(User user) throws Exception;
	
	public User findUserByUsername(String username) throws Exception;
	
	public int modify(int usercode) throws Exception;
	
	public int remove(int usercode) throws Exception;
}
