DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  message VARCHAR(250) NOT NULL
);

INSERT INTO messages (message) VALUES
  ('Sample Response 1'),
  ('Sample Response 2'),
  ('Sample Response 3');
