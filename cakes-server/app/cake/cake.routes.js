import express from 'express';
import { getAllCakes, getCake } from './cake.controller.js';

const router = express.Router();
router.route('/').get(getAllCakes);
router.route('/:id').get(getCake);

export default router;
