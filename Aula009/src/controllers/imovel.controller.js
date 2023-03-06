const con = require("../dao/connect")

const listar = (req,res) => {
    let query = `SELECT * FROM imoveis`;

    con.query(query, (err,response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const buscar = (req,res) => {
    const {info} = req.params;

    let where = "";

    if(info.includes("KSA") || info.includes("AP")) {
        where = `WHERE codigo = '${info}'`;
    }else{
        where = `WHERE endereco LIKE '%${info}%'`;
    }

    let query  = `SELECT * FROM imoveis ${where}`;

    con.query(query, (err,response) => {
        if(err == undefined) {
            res.status(200).json(response).end()
        }else{
            res.status(400).json(err).end()
        }
    })
}

const adicionar = (req,res) => {


    con.query(query, (err,response) => {
        if(err == undefined) {
            res.status(200).json(response).end()
        }else{
            res.status(400).json(err).end()
        }
    })

} 

module.exports ={
    listar,
    buscar,
    adicionar,
}