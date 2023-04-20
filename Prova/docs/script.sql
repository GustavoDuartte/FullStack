DROP DATABASE IF EXISTS loja;

CREATE DATABASE loja CHARSET UTF8 COLLATE utf8_general_ci;

USE loja;

CREATE TABLE
  vendedores (
    idvendedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_vendedor VARCHAR(255) NOT NULL,
    matricula INT NOT NULL UNIQUE
  );

CREATE TABLE
  produtos (
    idproduto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    valor FLOAT (5, 2) NOT NULL
  );

CREATE TABLE
  vendas (
    idvenda INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE NOT NULL,
    quantidade INT NOT NULL,
    produtoid INT NOT NULL,
    vendedorid INT NOT NULL,
    FOREIGN KEY (produtoid) REFERENCES produtos (idproduto) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (vendedorid) REFERENCES vendedores (idvendedor) ON UPDATE CASCADE ON DELETE CASCADE
  );