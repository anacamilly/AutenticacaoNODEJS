import 'reflect-metadata';
import express from 'express';
import path from 'path';
import authRoutes from './routes/auth';
import pagesRoutes from './routes/pages';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
    .then(() => {
        //Inicializa o express
        const app = express();
        const port = process.env.PORT || 3000;

        //View Engine - EJS
        app.set('views', path.join(__dirname, 'views')); //-> src/views
        app.set('view engine', 'ejs');

        app.use(express.urlencoded({extended: true}));
        app.use(express.json());

        app.use('/', pagesRoutes);
        app.use('/auth', authRoutes);

        //Inicia o servidor do express
        app.listen(port, () => console.log(`Server running on port ${port}.`));
        
        //request -> cliente envia para o servidor
        //response -> servidor envia para o cliente
    })
    .catch((error) => {
        throw new Error(error);
    })