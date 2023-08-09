import asyncHandler from 'express-async-handler';
import path from 'path';
import { prisma } from '../prisma.js';

const __dirname = path.resolve(path.dirname(''));

//@desc get All Reviews
//@route GET /api/reviews
//@access Public

export const getAllReviews = asyncHandler(async (req, res) => {
	const reviews = await prisma.reviews.findMany();
	if (!reviews) throw new Error('Reviews not found');
	res.json(reviews);
});

//@desc get Review
//@route GET /api/reviews/:id
//@access Public

export const getReview = asyncHandler(async (req, res) => {
	const review = await prisma.reviews.findUnique({
		where: {
			id: +req.params.id,
		},
	});
	if (!review) throw new Error('Review not found');
	res.json(review);
});

// //@desc create Review
// //@route POST /api/reviews
// //@access Public

// export const createReview = asyncHandler(async (req, res) => {
// 	try {
// 		const { name, description } = req.body;
// 		const { image } = req.files;
// 		const fileName = uuidv4() + '.png';
// 		image.mv(path.resolve(__dirname, '.', 'uploads/reviews', fileName));

// 		const review = await prisma.reviews.create({
// 			name,
// 			description,
// 			image: `/uploads/reviews/${fileName}`,
// 		});
// 		res.json(review);
// 	} catch (err) {
// 		res.send(err.message);
// 	}
// });
