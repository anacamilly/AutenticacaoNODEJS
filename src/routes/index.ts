import express from 'express';

//criar rotas dentro da aplicacao
const router = express.Router(); 

import homeController from '../controller/homeController';
import loginController from '../controller/loginController';
import signupController from '../controller/signupController';
import aboutController from '../controller/aboutController';

export const homeRouter = router.get('/', homeController);

export const loginRouter = router.get('/entrar', loginController);

export const signupRouter = router.get('/cadastro', signupController);

export const aboutRouter = router.get('/sobre', aboutController);