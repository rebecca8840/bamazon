DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

create table PRODUCTS (
	item_id INTEGER(11) auto_increment NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("Charlotte Olympia (Heels)", "Shoes", 475.00, 10),
("Giuseppe Zanotti (Sneakers)", "Shoes", 890.00, 5),
("Gucci (Skirt)", "Clothing", 950.00, 12),
("Jimmy Choo (Heels)", "Shoes", 1195.00, 9),
("Alice + Olivia (Dress)", "Clothing", 350.00, 8),
("Milk Makeup Hydrating Stick", "Beauty", 24.00, 20),
("Valentino (Dress)", "Clothing", 4.59, 15),
("Anastasia Beverly Hills Liquid Lipstick", "Beauty", 24.00, 22),
("Gucci (Sweater)", "Clothing", 1100.00, 7),
("Dior (Skirt)", "Clothing", 990.00, 5),
("Stila Precision Eyeliner", "Beauty", 22.00, 18),
("Balmain (Blazer)", "Clothing", 2395.00, 6),
("Christian Laboutin (Boots)", "Shoes", 945.00, 8);
SELECT * FROM products;