const axios = require('axios');

module.exports = {
    // Assíncronidade caso use o Await (pois a requisição demora um pouquinho)
    async store (req, res){
        //console.log(req.body.username);
        const { username } = req.body;
        
        //Acessando a API do Github utilizando o Axios
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return res.json(response.data);
    }
};