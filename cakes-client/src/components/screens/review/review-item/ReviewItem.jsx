import styles from './ReviewItem.module.scss';

const ReviewItem = ({ name, description, image }) => {
	return (
		<div className={styles.reviewItem} key={name}>
			<img
				src={import.meta.env.VITE_SERVER_URL + '/uploads/reviews/' + image}
			></img>
			<p>{name}</p>
			<p className={styles.reviewDescription}>{description}</p>
		</div>
	);
};

export default ReviewItem;
