import ReviewService from '../../../services/review.service';
import styles from './Review.module.scss';
import ReviewItem from './review-item/ReviewItem';
import { useEffect, useState } from 'react';

const Review = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await ReviewService.getAll();
			setReviews(data.data);
		};

		fetchData();
	}, []);

	return (
		<section className={styles.reviews}>
			<h3>Read the reviews of satisfied customers</h3>
			<div className={styles.square}>
				{reviews.length ? (
					reviews.map(reviews => (
						<ReviewItem
							name={reviews.name}
							image={reviews.image}
							description={reviews.description}
						/>
					))
				) : (
					<p>No reviews</p>
				)}
			</div>
		</section>
	);
};

export default Review;
