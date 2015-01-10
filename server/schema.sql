CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  `id` INT NOT NULL AUTO_INCREMENT,
  `u_id` INT,
  `message` VARCHAR(140),
  PRIMARY KEY  (`id`)
);

CREATE TABLE users (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(140),
  PRIMARY KEY  (`id`)
);

ALTER TABLE `messages` ADD CONSTRAINT `messages_fk1` FOREIGN KEY (`u_id`) REFERENCES users(`id`);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

