//Importando Express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

//Criando server baseado na instância do express
const server = express();

//Conexão com o banco de dados feita
mongoose.connect('mongodb+srv://joaolessab:minhasenha@cluster0-znguo.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

//Posso escolher qual porta usar
server.listen(3333);