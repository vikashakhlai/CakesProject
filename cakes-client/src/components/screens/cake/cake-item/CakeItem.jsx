import Button from '../../../ui/button/Button';
import styles from './CakeItem.module.scss';

const CakeItem = ({ name, price, description, image }) => {
	return (
		<div className={styles.cakeItem}>
			<div className={styles.cakeImage}>
				<img src={import.meta.env.VITE_SERVER_URL + image}></img>
			</div>
			<h5 className={styles.cakeName}>{name}</h5>
			<p className={styles.cakeDescription}>{description}</p>
			<p className={styles.cakePrice}>{price}$</p>
			<Button
				text='Order'
				color='#FED84C'
				fontSize={18}
				width={146}
				height={48}
				borderRadius={8}
			/>
		</div>
	);
};

export default CakeItem;
