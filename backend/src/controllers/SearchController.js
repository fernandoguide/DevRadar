const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');



module.exports = {

    // busca todos os devs em um raio de 10km
    // filtra por tecnologia
    async index(req, res) {
        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in:techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates:[latitude,longitude],           
                    },
                    $maxDistance: 10000,
                },
            }
        });


        return res.json(devs);
    },
}