//Importando Express
const express = require('express');
const routes = require('./routes');

//Criando server baseado na instância do express
const server = express();

server.use(routes);

//Posso escolher qual porta usar
server.listen(3333);