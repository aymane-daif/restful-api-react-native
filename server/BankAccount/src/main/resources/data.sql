CREATE DATABASE Bank;
USE Bank;
DROP TABLE IF EXISTS USER;
CREATE TABLE USER (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  address VARCHAR(200) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  cin VARCHAR(8) NOT NULL
);