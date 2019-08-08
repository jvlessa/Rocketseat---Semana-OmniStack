const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    // Assíncronidade caso use o Await (pois a requisição demora um pouquinho)
    async store (req, res){
        //console.log(req.body.username);
        const { username } = req.body;

        //Verificando se o usuário já existe no banco
        const userExists = await Dev.findOne({ user: username });
        if (userExists){
            return res.json(userExists);
        }
   
        //Acessando a API do Github utilizando o Axios
        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        //Lendo data da request do Github (renomeando campo avatar de retorno)
        const { name, bio, avatar_url: avatar } = response.data;

        //Armazenando no banco de dados utilizando o model e linkando os campos
        const dev = await Dev.create({ 
            name: name, 
            user: username,
            bio: bio,
            avatar: avatar
         });
        
        //Retornando a varíavel dev de criação de novo usuário no banco
        return res.json(dev);
    }
};

//MÁXIMO DE MÉTODOS EM UM CONTROLLER (5)
//INDEX, SHOW, STORE, UPDATE, DELETE
//Caso eu ultrapasse, deve-se criar um novo controller