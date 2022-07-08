-- user
CREATE TABLE `user_mst` (
	`user_id` INT(11) NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`email` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`password` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`name` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`provider` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`enrol_date` DATETIME NOT NULL,
	`last_access` DATETIME NOT NULL,
	PRIMARY KEY (`user_id`) USING BTREE,
	UNIQUE INDEX `username` (`username`) USING BTREE
)
COMMENT='use info master'
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=0
;

CREATE TABLE `user_dtl` (
	`user_id` INT(11) NOT NULL AUTO_INCREMENT,
	`user_profile_img` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`user_address` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`user_phone` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`user_gender` INT(11) NULL DEFAULT NULL,
	`enrol_date` DATETIME NOT NULL,
	`last_access` DATETIME NOT NULL,
	PRIMARY KEY (`user_id`) USING BTREE
)
COMMENT='user info detail'
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=0
;

CREATE TABLE `authorities` (
	`username` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`authority` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`create_date` DATETIME NOT NULL,
	`update_date` DATETIME NOT NULL,
	PRIMARY KEY (`username`, `authority`) USING BTREE,
	CONSTRAINT `authorities_FK` FOREIGN KEY (`username`) REFERENCES `shopping`.`user_mst` (`username`) ON UPDATE CASCADE ON DELETE CASCADE
)
COMMENT='user authorities'
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;

-- category
CREATE TABLE `category` (
	`category_id` INT(11) NOT NULL AUTO_INCREMENT,
	`category_id_parent` INT(11) NOT NULL DEFAULT '0',
	`title` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`icon` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`description` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb3_general_ci',
	`create_date` DATETIME NOT NULL,
	`update_date` DATETIME NOT NULL,
	PRIMARY KEY (`category_id`) USING BTREE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=0
;

-- product
CREATE TABLE `product` (
	`product_id` INT(11) NOT NULL AUTO_INCREMENT,
	`category_id` INT(11) NOT NULL,
	`name` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`price` INT(10) UNSIGNED NOT NULL,
	`discount` INT(11) NOT NULL DEFAULT '0',
	`description` VARCHAR(200) NOT NULL COLLATE 'utf8mb3_general_ci',
	`product_img` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`color` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`size` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`create_date` DATETIME NOT NULL,
	`update_date` DATETIME NOT NULL,
	PRIMARY KEY (`product_id`) USING BTREE,
	INDEX `product_FK` (`category_id`) USING BTREE,
	CONSTRAINT `product_FK` FOREIGN KEY (`category_id`) REFERENCES `shopping`.`category` (`category_id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COMMENT='products'
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=0
;

-- basket 
CREATE TABLE `basket` (
	`username` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`product_id` INT(11) NOT NULL,
	`count` INT(11) NOT NULL,
	`create_date` DATETIME NOT NULL,
	`update_date` DATETIME NOT NULL,
	PRIMARY KEY (`username`) USING BTREE,
	INDEX `basket_FK_product_id` (`product_id`) USING BTREE,
	CONSTRAINT `basket_FK_product_id` FOREIGN KEY (`product_id`) REFERENCES `shopping`.`product` (`product_id`) ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT `basket_FK_username` FOREIGN KEY (`username`) REFERENCES `shopping`.`user_mst` (`username`) ON UPDATE CASCADE ON DELETE CASCADE
)
COMMENT='user baskets'
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;

-- board
CREATE TABLE `board` (
	`id` INT(11) NOT NULL,
	`username` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`type` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`content` BLOB NOT NULL,
	`create_date` DATETIME NOT NULL,
	`update_date` DATETIME NOT NULL,
	INDEX `board_FK_username` (`username`) USING BTREE,
	CONSTRAINT `board_FK_username` FOREIGN KEY (`username`) REFERENCES `shopping`.`user_mst` (`username`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;

-- order
CREATE TABLE `order` (
	`order_id` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`username` VARCHAR(50) NOT NULL COLLATE 'utf8mb3_general_ci',
	`product_id` INT(11) NOT NULL,
	`state` ENUM('ready','dilivery','cimplete') NOT NULL COLLATE 'utf8mb3_general_ci',
	`create_date` DATETIME NOT NULL,
	`update_date` DATETIME NOT NULL,
	PRIMARY KEY (`order_id`) USING BTREE,
	INDEX `order_FK_username` (`username`) USING BTREE,
	INDEX `order_KF_product_id` (`product_id`) USING BTREE,
	CONSTRAINT `order_FK_username` FOREIGN KEY (`username`) REFERENCES `shopping`.`user_mst` (`username`) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT `order_KF_product_id` FOREIGN KEY (`product_id`) REFERENCES `shopping`.`product` (`product_id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb3_general_ci'
ENGINE=InnoDB
;
