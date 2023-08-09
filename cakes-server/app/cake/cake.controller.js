import asyncHandler from 'express-async-handler';
import path from 'path';
import { prisma } from '../prisma.js';

const __dirname = path.resolve(path.dirname(''));

//@desc get All Cakes
//@route GET /api/cakes
//@access Public

export const getAllCakes = asyncHandler(async (req, res) => {
	const cakes = await prisma.cakes.findMany();
	if (!cakes) throw new Error('Cakes not found!');
	res.json(cakes);
});

//@desc get Cake
//@route GET /api/cakes/:id
//@access Public

export const getCake = asyncHandler(async (req, res) => {
	const cake = await prisma.cakes.findUnique({
		where: {
			id: +req.params.id,
		},
	});
	if (!cake) throw new Error('Cake not found');
	res.json(cake);
});

// //@desc create Dish
// //@route POST /api/cakes
// //@access Public

// export const createCake = asyncHandler(async (req, res) => {
// 	try {
// 		const { name, description, price } = req.body;
// 		const { image } = req.files;
// 		const fileName = uuidv4() + '.png';
// 		image.mv(path.resolve(__dirname, '.', 'uploads/cakes', fileName));
// 		const cake = await prisma.cakes.create({
// 			name,
// 			description,
// 			price: +price,
// 			image: `/uploads/cakes/${fileName}`,
// 		});
// 		res.json(cake);
// 	} catch (err) {
// 		res.send(err.message);
// 	}
// });
