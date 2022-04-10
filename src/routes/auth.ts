import { Router } from "express";

const router = Router(); 

export const loginRouter = router.get('/entrar', (req, res) => {
    res.render('login');
});

export const signupRouter = router.get('/cadastro', (req, res) => {
    res.render('signup');
});

export const aboutRouter = router.get('/sobre', (req, res) => {
    res.render('about');
});

export default router;
