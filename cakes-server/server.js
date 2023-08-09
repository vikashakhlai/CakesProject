import 'colors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';
import { prisma } from './app/prisma.js';

import cakeRoutes from './app/cake/cake.routes.js';
import reviewRoutes from './app/review/review.routes.js';

dotenv.config();

const app = express();

async function main() {
	app.use(cors());
	app.use(express.json());
	app.use(cookieParser());
	app.use(express.urlencoded({ extended: true }));

	const __dirname = path.resolve();
	app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
	app.use(fileUpload({}));
	app.use('/api/cakes', cakeRoutes);
	app.use('/api/reviews', reviewRoutes);

	const PORT = process.env.PORT || 3000;
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
		)
	);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
