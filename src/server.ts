import express from 'express';
import path from 'path';

//Inicializa o express
const app = express();
const port = process.env.PORT || 3000;

import authRoutes from './routes/auth';
import pagesRoutes from './routes/pages';

//View Engine - EJS
app.set('views', path.join(__dirname, 'views')); //-> src/views
app.set('view engine', 'ejs');

app.use('/', pagesRoutes);
app.use('/auth', authRoutes);

//Inicia o servidor do express
app.listen(port, () => console.log(`Server running on port ${port}.`));


//request -> cliente envia para o servidor
//response -> servidor envia para o cliente