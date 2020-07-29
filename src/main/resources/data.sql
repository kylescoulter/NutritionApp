-- noinspection SqlDialectInspectionForFile

-- noinspection SqlNoDataSourceInspectionForFile

-- DROP TABLE IF EXISTS messages;


-- DROP TABLE IF EXISTS accounts;

-- CREATE TABLE messages (
--   id INT AUTO_INCREMENT  PRIMARY KEY,
--   message VARCHAR(250) NOT NULL
-- );
--
-- INSERT INTO messages (message) VALUES
--   ('Sample Response 1'),
--   ('Sample Response 2'),
--   ('Sample Response 3');

-- CREATE TABLE accounts (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     firstName VARCHAR(250),
--     lastName VARCHAR(250),
--     email VARCHAR(250),
--     username VARCHAR(250),
--     password VARCHAR(250)
-- );

INSERT INTO account_entity VALUES
(1, 'kscoulter@unomaha.edu', 'Kyle', 'Coulter', 'password', 'kylescoulter'),
(2, 'test@mail.com', 'Test', 'lastname', 'pass', 'username');