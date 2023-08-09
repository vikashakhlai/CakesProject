import styles from './Header.module.scss';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';

const Header = () => {
	return (
		<header className={styles.header}>
			<ul className={styles.list}>
				<li>Cakes</li>
				<li>
					<FiMapPin fontSize={18} />
					<span>America city</span>
				</li>
				<li>
					<a className={styles.phone} href='tel:+375331234567'>
						<FiPhoneCall fontSize={18} />
						<span> +375331234567</span>
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
