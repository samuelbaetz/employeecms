
CREATE DATABASE employcms;
USE employcms;

CREATE TABLE accounts
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
    email varchar(255) NOT NULL
	PRIMARY KEY (id)
);


CREATE TABLE departments
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE employee
(
    first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL
	
);


CREATE TABLE managers
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
    phone INT(255) NOT NULL
	PRIMARY KEY (id)
);


CREATE TABLE roles
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	salary INT(255) NOT NULL,
    department_id INT(255) NOT NULL
	PRIMARY KEY (id)
);



