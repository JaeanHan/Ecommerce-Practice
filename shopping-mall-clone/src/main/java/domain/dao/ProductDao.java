package domain.dao;

import java.util.List;

import domain.entity.Product;

public interface ProductDao {
	/*
	 * 메뉴 아이디로 상품 목록 조회
	 * params categoryId
	 * return
	 */
	List<Product> findAllByCategoryId(int categoryId);
}
