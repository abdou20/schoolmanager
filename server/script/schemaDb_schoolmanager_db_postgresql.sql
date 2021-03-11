--
-- Database: schoolmanager_db
--

CREATE DATABASE schoolmanager_db;

-- ENTITIES

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity course
--

CREATE TABLE IF NOT EXISTS "course" (
	description varchar(130) ,
	name varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity students
--

CREATE TABLE IF NOT EXISTS "students" (
	lastname varchar(130)  NOT NULL,
	name varchar(130)  NOT NULL,
	phone varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity teacher
--

CREATE TABLE IF NOT EXISTS "teacher" (
	lastname varchar(130)  NOT NULL,
	name varchar(130)  NOT NULL,
	phone varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);




-- relation 1:m courses students - course
ALTER TABLE students ADD COLUMN courses INTEGER  REFERENCES "course"(_id);
