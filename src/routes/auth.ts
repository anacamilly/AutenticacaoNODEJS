import { Router } from "express";
import { renderLogin, renderSignup, signup} from "../controllers/authController";
const router = Router(); 

router.get('/entrar', renderLogin);
router.get('/cadastro', renderSignup);

// rotas de ação
router.post('/cadastro', signup);

export default router;
