const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // utilizar o método json do express para podermos especificar o típo de body que haverá na requisição, no caso obteremos jsons;
app.use(routes);

console.log('Servidor iniciando...');
app.listen(3333);