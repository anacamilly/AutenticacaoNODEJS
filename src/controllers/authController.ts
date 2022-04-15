import { Request, Response } from "express";

// renderiza a tela de login
export const renderLogin = (req: Request, res: Response) => {
    res.render('login');
}

// renderiza a tela de cadastro
export const renderSignup = (req: Request, res: Response) => {
    res.render('signup');
}

// realiza cadastro do usuario
export const signup = (req: Request, res: Response) => {
    // enviar como resposta os dados que vieram na requisição
    console.log(req.body);
    res.send('ok');
}