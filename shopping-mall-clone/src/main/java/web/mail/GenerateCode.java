package web.mail;

import java.util.Random;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GenerateCode {
	private int veriCodeLength = 4;
	
	public String generateCode() {
		Random random = new Random(System.currentTimeMillis());
		int range = (int)Math.pow(10, veriCodeLength);
		int trim = (int)Math.pow(10, veriCodeLength - 1);
		int result = random.nextInt(range) + trim;
		
		if(result > range) {
			result -= trim;
		}
		
		return String.valueOf(result);
	}
	
	
}
