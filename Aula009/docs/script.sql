DROP DATABASE IF EXISTS imobiliaria;

CREATE DATABASE imobiliaria;

USE imobiliaria;

CREATE TABLE
  corretores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    salario FLOAT (6, 2) NOT NULL
  );

CREATE TABLE status(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255)
);

CREATE TABLE
  imoveis (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    corretor_id INT NOT NULL,
    codigo VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    valor_venda FLOAT (10, 2),
    valor_aluguel FLOAT (10, 2),
    status_id INT NOT NULL, 
    FOREIGN KEY (status_id) REFERENCES status (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (corretor_id) REFERENCES corretores (id) ON DELETE CASCADE ON UPDATE CASCADE
  );


INSERT INTO corretores VALUES 
(null, "Zeh das venda", "15948", "2001", 2500),
(null, "Jorge", "1223", "2002", 3500);

INSERT INTO status VALUES
(null, "Disponivel"),
(null, "Alugado"),
(null, "Vendido");

INSERT INTO imoveis VALUES
(null, 1, "KSA7894", "Rua ruana, 8", 400000, 850, 1),
(null, 1, "AP6315", "Rua jaringa, 9, AP 12", 500000, 550, 2),
(null, 2, "KS9146", "Rua Kaliu, 18", 1200000, 5550, 3);