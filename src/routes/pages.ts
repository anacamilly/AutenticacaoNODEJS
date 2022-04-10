import { Router } from 'express';
import { index, about } from '../controllers/pagesController';

const router = Router();

router.get('/', index);

router.get('/sobre', about);

export default router;