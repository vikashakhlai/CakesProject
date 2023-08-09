import styles from './Gallery.module.scss';

const Gallery = () => {
	return (
		<section className={styles.galleryContainer}>
			<h2>Made more than 3,000 orders in 2 years</h2>
			<p>See photos of real orders from our instagram</p>
			<div className={styles.gallery}>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
				<figure className={styles.imageContainer}>
					<img src='../../../../dist/gallery/cake1.png' />
				</figure>
			</div>
		</section>
	);
};

export default Gallery;
