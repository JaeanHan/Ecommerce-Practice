package service.product;

import java.util.List;

import domain.entity.Product;

public interface ProductService {
	/*
	 * 메뉴 아이디로 상품 목록 조회
	 * param categoryId
	 * return
	 */
	public List<Product> getProductList(int categoryId);
}
