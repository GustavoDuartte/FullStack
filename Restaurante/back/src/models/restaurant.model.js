class Restaurant {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.categoriaid = i.categoriaid;
    this.rua = i.rua;
    this.numero = i.numero;
    this.bairro = i.bairro;
    this.cidade = i.cidade;
    this.estado = i.estado;
    this.complemento = i.complemento;
  }

  add() {
    return `INSERT INTO restaurante VALUE (DEFAULT, '${this.nome}', '${this.categoriaid}', '${this.rua}', '${this.numero}', '${this.bairro}','${this.cidade}', '${this.estado}', '${this.complemento}')`;
  }
  read() {
    return `SELECT * FROM restaurante`;
  }

  delete() {
    return `DELETE FROM restaurante WHERE id = ${this.id}`;
  }
}
module.exports = Restaurant;
