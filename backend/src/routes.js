const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

// Root Get
routes.get('/', (req, res) => {
    return res.json( {message: `Hello ${req.query.name}`} );
});

// Post para testar
routes.post('/postPrimario', (req, res) => {
    console.log(req.body);
    return res.json( {ok: true} );
});

// Rota com controller
routes.post('/devs', DevController.store);

module.exports = routes;