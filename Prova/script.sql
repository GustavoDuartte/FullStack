DROP DATABASE IF EXISTS adamastor;

CREATE DATABASE adamastor;

USE adamastor;

CREATE TABLE
  veiculo (
    placa VARCHAR(255) NOT NULL PRIMARY KEY,
    modelo VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    cor VARCHAR(255) NOT NULL
  );

CREATE TABLE
  cliente (
    cpf VARCHAR(255) NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    uf VARCHAR(255) NOT NULL,
    placa_veiculo VARCHAR(255) NOT NULL,
    FOREIGN KEY (placa_veiculo) REFERENCES veiculo (placa) ON DELETE CASCADE ON UPDATE CASCADE
  );

CREATE TABLE
  telefone (
    cpf VARCHAR(255) NOT NULL,
    telefones VARCHAR(255) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES cliente (cpf) ON DELETE CASCADE ON UPDATE CASCADE
  );

CREATE TABLE
  vaga (
    id INT NOT NULL PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor FLOAT (5, 2) NOT NULL
  );

CREATE TABLE
  estacionamento (
    id INT NOT NULL PRIMARY KEY,
    entrada DATE NOT NULL,
    hora_entrada VARCHAR(255) NOT NULL,
    saida DATE NOT NULL,
    hora_saida VARCHAR(255) NOT NULL,
    valor FLOAT (5, 2) NOT NULL,
    cpf_cliente VARCHAR(255) NOT NULL,
    id_vaga INT NOT NULL,
    FOREIGN KEY (id_vaga) REFERENCES vaga (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cpf_cliente) REFERENCES cliente (cpf) ON DELETE CASCADE ON UPDATE CASCADE
  );

LOAD DATA INFILE 'E:/Gustavo/Prova/veiculo.csv' INTO TABLE veiculo FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/Gustavo/Prova/cliente.csv' INTO TABLE cliente FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/Gustavo/Prova/telefone.csv' INTO TABLE telefone FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/Gustavo/Prova/vaga.csv' INTO TABLE vaga FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;

LOAD DATA INFILE 'E:/Gustavo/Prova/estacionamento.csv' INTO TABLE estacionamento FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;