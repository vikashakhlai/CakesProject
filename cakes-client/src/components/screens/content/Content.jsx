import Button from '../../ui/button/Button';
import styles from './Content.module.scss';

const Content = () => {
	return (
		<section className={styles.content}>
			<img src='/assets/phone.png' alt='' />
			<div className={styles.textContent}>
				{window.innerWidth >= 768 ? (
					<Button
						width={263}
						height={37}
						text='Did not find what you need?'
						borderRadius={5}
						readOnly
						disabled
					/>
				) : (
					<Button
						width={160}
						height={27}
						text='Did not find what you need?'
						fontSize={10}
						borderRadius={5}
						readOnly
						disabled
					/>
				)}
				<h2>
					We will prepare an order of any complexity based on a photo or sketch
				</h2>
				<p>
					Upload a photo or sketch of cupcakes and we will calculate the cost in
					30 minutes
				</p>
				{window.innerWidth >= 768 ? (
					<Button
						text='Upload a photo'
						color='#FED84C'
						borderRadius={8}
						fontSize={18}
						width={280}
						height={88}
					/>
				) : (
					<Button
						text='Upload a photo'
						color='#FED84C'
						borderRadius={8}
						fontSize={14}
						width={170}
						height={28}
					/>
				)}
			</div>
		</section>
	);
};

export default Content;
