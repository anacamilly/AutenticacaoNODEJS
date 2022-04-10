import express from 'express';
//--import express from 'express';-- ou --const express = require('express');--
import path from 'path';

//Inicializa o express (Framework web)
const app = express();

import {homeRouter} from './routes';

//View Engine - EJS
app.set('views', path.join(__dirname, 'views')); //-> src/views
app.set('view engine', 'ejs');

app.use('/', homeRouter);

//Inicia o servidor do express
app.listen(3000, () => console.log('Server running on port 3000.'));


/*//request -> cliente envia para o servidor
//response -> servidor envia para o cliente
app.get('/', (request, response) => {
    response.send('OLA MUNDO')
})*/
