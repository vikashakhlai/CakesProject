import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.list}>
				<li>Согласие на обработку данных</li>
				<li>Служба поддержки</li>
				<li>Политика конфиденциальности</li>
				<li>
					© nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
