CREATE DATABASE intern_task;
USE intern_task;

CREATE TABLE auth_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(255)
);
