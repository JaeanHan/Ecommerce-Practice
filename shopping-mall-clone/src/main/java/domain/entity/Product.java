package domain.entity;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Product {
	private int productId;
	private int price;
	private int discount;
	private int categoryId;
	
	private String name;
	private String description;
	private String productImg;
	private String size;
	
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}
