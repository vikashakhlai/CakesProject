import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.list}>
				<li>Consent to data processing</li>
				<li>Service support</li>
				<li>Privacy Policy</li>
				<li>© nazvaniesaita.ru, 2054 | Company</li>
			</ul>
		</footer>
	);
};

export default Footer;
