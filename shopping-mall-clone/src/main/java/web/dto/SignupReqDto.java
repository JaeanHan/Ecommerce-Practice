package web.dto;

import domain.entity.User;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Builder
public class SignupReqDto {
	private final String name;
	private final String email;
	private final String username;
	private final String password;
	
	public User toEntity() {
		return User.builder()
				.name(name)
				.email(email)
				.username(username)
				.password(password)
				.build();
	}
	
	static User toEntity(String name, String email, String username, String password) {
		return User.builder()
				.name(name)
				.email(email)
				.username(username)
				.password(password)
				.build();
	}
}
