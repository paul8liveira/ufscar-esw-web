//gerenciador da rota do crud => Ex: localhost:3000/crud
import express from 'express';
import CrudController from '../controllers/crud';

const router = express.Router();
const crudController = new CrudController();

router.get('/', (req, res, next) => crudController.get(req, res, next));
router.post('/mock', (req, res, next) => crudController.mock(req, res, next));
router.post('/save', (req, res, next) => crudController.insert(req, res, next));
router.put('/save', (req, res, next) => crudController.update(req, res, next));
router.post('/delete', (req, res, next) => crudController.delete(req, res, next));

export default router;