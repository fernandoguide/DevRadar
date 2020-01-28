const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack123@mydb-fzn7i.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true ,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);