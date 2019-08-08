const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        console.log(req.params.devId);
        console.log(req.headers.user);

        //Desestruturar parametros
        const { user } = req.headers;
        const { devId } = req.params;
        
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        //Se o targetDev não existe
        if (!targetDev){
            return res.status(404).json({ error: 'Dev not exists' });
        }
        
        //Armazenando
        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();       

        return res.json(loggedDev);
    }
};