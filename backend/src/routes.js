const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

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
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;