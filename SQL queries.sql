DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS thread CASCADE;
DROP TABLE IF EXISTS post CASCADE;
DROP TABLE IF EXISTS role CASCADE;
DROP TABLE IF EXISTS category CASCADE;
DROP TABLE IF EXISTS roles CASCADE;

--Create Tables
CREATE TABLE roles (role_id serial PRIMARY KEY, role_name VARCHAR(15));
CREATE TABLE users (user_id serial PRIMARY KEY, username varchar(25),role_id int,password varchar(60), email varchar(30),register_date TIMESTAMP DEFAULT CURRENT_DATE,last_login TIMESTAMP DEFAULT CURRENT_DATE, CONSTRAINT fk_role_ID FOREIGN KEY(role_id) REFERENCES roles(role_id));
CREATE TABLE category (cat_id serial PRIMARY KEY, name VARCHAR(120));
CREATE TABLE thread (thread_id serial PRIMARY KEY, cat_id INT REFERENCES category (cat_id),subject VARCHAR(120), user_id INT,create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE SET NULL);
CREATE TABLE post (post_id serial PRIMARY KEY, thread_id INT REFERENCES thread (thread_id) ON DELETE CASCADE, user_id INT REFERENCES users (user_id) ON DELETE SET NULL, content VARCHAR(5000) NOT NULL, post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

--add user roles
INSERT INTO roles (role_name) VALUES ('user');
INSERT INTO roles (role_name) VALUES ('admin');

--Insert Users
INSERT INTO users VALUES (DEFAULT,'hunterrisse',2,'SADJLFAIMSCIMASE','hunterrisse@gmail.com');
INSERT INTO users VALUES (DEFAULT,'Madison',2,'SADJLFAIMSCIMASE','M@gmail.com');
INSERT INTO users VALUES (DEFAULT,'Gino',2,'SADJLFAIMSCIMASE','Gilgamesh@gmail.com');
INSERT INTO users VALUES (DEFAULT,'Eric',2,'SADJLFAIMSCIMASE','Evara@gmail.com');

--insert categories
INSERT INTO category VALUES(DEFAULT,'Anime');
INSERT INTO category VALUES(DEFAULT,'Technology');
INSERT INTO category VALUES(DEFAULT,'Psychology');
INSERT INTO category VALUES(DEFAULT,'Art');

--insert a THREAD
INSERT INTO thread VALUES (DEFAULT,1,'Best Anime',1,DEFAULT);
INSERT INTO thread VALUES (DEFAULT,2,'React technology',4,DEFAULT);
INSERT INTO thread VALUES (DEFAULT,3,'Playing as Japan psychology',3,DEFAULT);
INSERT INTO thread VALUES (DEFAULT,4,'Morning art',2,DEFAULT);

--make post
INSERT INTO post VALUES (DEFAULT,1,1,'Anime is the pinnacle of entertaiment, The best of the best being Kanata no Astra: Lost in Space. CHANGE MY MIND',DEFAULT);
INSERT INTO post VALUES (DEFAULT,4,2,'There is no better time to do art then in the early morning.',DEFAULT);
INSERT INTO post VALUES (DEFAULT,2,4,'This new React v18 really brought some major changes',DEFAULT);
INSERT INTO post VALUES (DEFAULT,3,3,'History repeats itself, people follow patterns, and taking over the entirety of Asia as Japan is a challenge.',DEFAULT);
INSERT INTO post VALUES (DEFAULT,1,3,'That is incorrect. The best anime by far is Fate/Zero.',DEFAULT);
INSERT INTO post VALUES (DEFAULT,1,1,'You can say that after you see Kanata no Astra',DEFAULT);

SELECT content,post_date,user_id FROM post WHERE thread_id = (select thread_id FROM thread WHERE subject = 'Best Anime');

