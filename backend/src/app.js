const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // utilizar o método json do express para podermos especificar o típo de body que haverá na requisição, no caso obteremos jsons;
app.use(routes);
app.use(errors());

console.log('Servidor iniciando...');
module.exports = app;