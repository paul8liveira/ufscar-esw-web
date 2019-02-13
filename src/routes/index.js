import express from 'express';
import crudRoute from './crud';
import path from 'path';

const router = express.Router();
const appDir = path.dirname(require.main.filename);

router.use('/crud', crudRoute); 
router.get('/', (req, res, next) => {
    res.sendFile(path.join(`${appDir}/public/index.html`));
});

export default router;
