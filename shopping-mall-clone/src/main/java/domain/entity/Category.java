package domain.entity;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Category {
	private int categoryId;
	private int categoryParentId;
	
	private String title;
	private String icon;
	private String description;
	
	private LocalDateTime create_date;
	private LocalDateTime update_date;
}
