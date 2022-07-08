package domain.dao;

import java.util.List;

import domain.entity.Category;

public interface CategoryDao {
	public int insert(Category category) throws Exception;
	
	public List<Category> getParentCategories() throws Exception;
	public List<Category> getCategoriesByParentCategoryID(int ParentcategoryID) throws Exception;
	
	public int update(int categoryID) throws Exception;
	
	public int delete(int categoryID) throws Exception;
}
