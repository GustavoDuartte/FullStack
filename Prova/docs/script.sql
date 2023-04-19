DROP DATABASE IF EXISTS loja;

CREATE DATABASE loja CHARSET UTF8 COLLATE utf8_general_ci;

USE loja;

CREATE TABLE
  vendedores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_vendedor VARCHAR(255) NOT NULL,
    matricula INT NOT NULL
  );

CREATE TABLE
  produtos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    valor FLOAT (5,2) NOT NULL
  );

CREATE TABLE
  vendas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE NOT NULL,
    quantidade INT NOT NULL,
    produtoid INT NOT NULL,
    vendedorid INT NOT NULL,
    FOREIGN KEY (produtoid) REFERENCES produtos (id) ON UPDATE CASCADE,
    FOREIGN KEY (vendedorid) REFERENCES vendedores (id) ON UPDATE CASCADE
  );