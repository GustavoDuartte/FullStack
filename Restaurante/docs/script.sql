DROP DATABASE IF EXISTS restaurante;

CREATE DATABASE restaurante CHARSET UTF8 COLLATE utf8_general_ci;

USE restaurante;

CREATE TABLE
  cliente (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone1 VARCHAR(255),
    telefone2 VARCHAR(255)
  );

CREATE TABLE
  categoria (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
  );

CREATE TABLE
  restaurante (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    categoriaid INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    numero INT NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    FOREIGN KEY (categoriaid) REFERENCES categoria (id) ON UPDATE CASCADE
  );

CREATE TABLE
  cardapio (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restauranteid INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor FLOAT (5, 2) NOT NULL,
    FOREIGN KEY (restauranteid) REFERENCES restaurante (id) ON UPDATE CASCADE ON DELETE CASCADE
  );

CREATE TABLE
  avaliacao (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restauranteid INT NOT NULL,
    clienteid INT NOT NULL,
    dataava DATE NOT NULL,
    nota INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    FOREIGN KEY (restauranteid) REFERENCES restaurante (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (clienteid) REFERENCES cliente (id) ON UPDATE CASCADE ON DELETE CASCADE
  );