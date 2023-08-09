import express from 'express';
import { getAllReviews, getReview } from './review.controller.js';

const router = express.Router();
router.route('/').get(getAllReviews);
router.route('/:id').get(getReview);

export default router;
