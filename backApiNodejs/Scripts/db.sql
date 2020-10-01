create database trips;

use trips;

CREATE TABLE trips(
  id int PRIMARY KEY,
  user_id int,
  name varchar(100),
  fecha timestamp,
  country_id int,
  state_id int,
  city_id int,
  description varchar(300)
);

CREATE TABLE countries(
  id int PRIMARY KEY,
  nombre varchar(255)
);

CREATE TABLE states(
  id int PRIMARY KEY,
  country_id int,
  name varchar(255)
);

CREATE TABLE cities (
  id int PRIMARY KEY,
  state_id int,
  name varchar(255)
);

CREATE TABLE users (
  id int PRIMARY KEY,
  username varchar(100),
  password nvarchar(50),
  name varchar(255),
  birthday timestamp,
  city_id int
);


ALTER TABLE cities ADD FOREIGN KEY (state_id) REFERENCES states (id);

ALTER TABLE users ADD FOREIGN KEY (city_id) REFERENCES cities (id);

ALTER TABLE trips ADD FOREIGN KEY (city_id) REFERENCES cities (id);

ALTER TABLE states ADD FOREIGN KEY (country_id) REFERENCES countries (id);

ALTER TABLE trips ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE trips ADD FOREIGN KEY (country_id) REFERENCES countries (id);

ALTER TABLE trips ADD FOREIGN KEY (state_id) REFERENCES states (id);


AlTER TABLE trips
    modify id INT NOT NULL AUTO_INCREMENT;
    
AlTER TABLE countries
    modify id INT NOT NULL AUTO_INCREMENT;
    
AlTER TABLE states
    modify id INT NOT NULL AUTO_INCREMENT;
    
AlTER TABLE cities
    modify id INT NOT NULL AUTO_INCREMENT;
    
AlTER TABLE users
    modify id INT NOT NULL AUTO_INCREMENT;
    
    
insert into countries values	
	(1,'Colombia'),
    (2,'España'),
    (3,'Estados Unidos'),
    (4,'Mexico'),
    (5,'Argentina');
    
insert into states values	
	(1,1,'Antioquia'),
    (2,2,'Florencia'),
    (3,3,'Dc'),
    (4,4,'Colorado'),
    (5,5,'Arg');
    
insert into cities values	
	(1,1,'Medellin'),
    (2,2,'Fl'),
    (3,3,'Dc'),
    (4,4,'Co'),
    (5,5,'Ar');
    
insert into users values	
	(1,'usuario','contraseña','nicolle','1995-09-13 03:14:07',1);
    

select * from trips

