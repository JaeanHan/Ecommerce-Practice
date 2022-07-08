-- 의류
INSERT INTO category
(category_id, title, icon, description, create_date, update_date)
VALUES(1, '의류', 'fas fa-tshirt', '의류', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(1, '아우터', 'far fa-circle', '아우터', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(1, '티셔츠', 'far fa-circle', '티셔츠', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(1, '바지', 'far fa-circle', '바지', now(), now());

-- 신발
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(0, '신발', 'fas fa-shoe-prints', '신발', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(2, '운동화', 'far fa-circle', '운동화', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(2, '로퍼', 'far fa-circle', '로퍼', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(2, '부츠', 'far fa-circle', '부츠', now(), now());

--악세사리
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(0, '악세사리', 'fas fa-hat-wizard', '악세사리', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(3, '양말', 'far fa-circle', '양말', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(3, '모자', 'far fa-circle', '모자', now(), now());
INSERT INTO category
(category_id_parent, title, icon, description, create_date, update_date)
VALUES(3, '가방', 'far fa-circle', '가방', now(), now());