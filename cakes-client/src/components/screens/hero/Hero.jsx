import Button from '../../ui/button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroContent}>
				{window.innerWidth >= 768 ? (
					<Button
						text='Very tasty'
						fontSize={12}
						width={132}
						height={38}
						borderRadius={5}
					/>
				) : (
					<Button
						text='Very tasty'
						fontSize={12}
						width={80}
						height={20}
						borderRadius={5}
					/>
				)}

				<h1>Cakes and cupcakes from 7.5 $/pc. with delivery in America.</h1>
				<p>
					We will prepare it in 3 hours on the day of the order. Delivery by car
					in a refrigerator.
				</p>
				<div className={styles.heroBlock}>
					{window.innerWidth >= 768 ? (
						<Button
							text='Go to catalog'
							color='#FED84C'
							fontSize={18}
							width={277}
							height={88}
							borderRadius={8}
						/>
					) : (
						<Button
							text='Go to catalog'
							color='#FED84C'
							fontSize={14}
							width={128}
							height={28}
							borderRadius={6}
						/>
					)}

					<p>9 different types to choose from</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
