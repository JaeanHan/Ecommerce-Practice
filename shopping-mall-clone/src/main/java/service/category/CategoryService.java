package service.category;

import java.util.List;
import java.util.Map;

import domain.entity.Category;

public interface CategoryService {
	int addCategory(Category category) throws Exception;
	
	Map<String, List<Category>> getCategory() throws Exception;
	
	int updateCategoryByCategoryId(int categoryId) throws Exception;
	
	int deleteCategoryByCategoryId(int categoryId) throws Exception;
}
