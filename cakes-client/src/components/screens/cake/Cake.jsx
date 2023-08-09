import CakeService from '../../../services/cake.service';
import styles from './Cake.module.scss';
import CakeItem from './cake-item/CakeItem';
import { useEffect, useState } from 'react';

const Cake = () => {
	const [cakes, setCakes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await CakeService.getAll();
			setCakes(data.data);
		};

		fetchData();
	}, []);

	return (
		<section className={styles.cakes}>
			<h3>For any events and people dear to you</h3>
			<div className={styles.cakeContainer}>
				<div className={styles.cakesList}>
					{cakes.length ? (
						cakes.map(cake => (
							<CakeItem
								name={cake.name}
								description={cake.description}
								price={cake.price}
								image={cake.image}
							/>
						))
					) : (
						<p>Cakes not found</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default Cake;
