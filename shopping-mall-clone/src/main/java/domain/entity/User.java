package domain.entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class User {
	private int userId;
	private String username;
	private String email;
	private String password;
	private String name;
	private String provider;
	
	private String authority;
	
	private String profileImg;
	private String address;
	private String phone;
	private int gender;
	
}
