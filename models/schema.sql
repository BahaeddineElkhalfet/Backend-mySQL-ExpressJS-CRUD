DROP DATABASE IF EXISTS MyDB;

CREATE DATABASE MyDB;

USE MyDB;

CREATE TABLE exampleTable (
  id int NOT NULL AUTO_INCREMENT,
  example integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);