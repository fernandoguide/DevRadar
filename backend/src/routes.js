const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;




// Metodos HTTP GET,POST,PUT,DELETE

// Tipos de parametros

// query parms (Filtros , ordenacao )
// route parms (identificar um recurso na alteracao ou delecao)
// body (Dados para criacao ou ateraco de um registro)


// routes.get('/users', (req, res) => {
//     console.log(req.query);
//     return res.json({ message: 'Hello Omnistack' })
// });

// routes.delete('/users/:id', (req, res) => {
//     console.log(req.params);
//     return res.json({ message: 'Hello Omnistack' })
// });

// routes.put('/users/:id', (req, res) => {
//     console.log(req.params);
//     return res.json({ message: 'Hello Omnistack' })
// });