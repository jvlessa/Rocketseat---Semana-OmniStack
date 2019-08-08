//Importando Express
const express = require('express');

//Criando server baseado na instância do express
const server = express();

//Rotas
server.get('/', (req, res) => {
    return res.json({message: `Hello ${req.query.name}`});
});

//Posso escolher qual porta usar
server.listen(3333);