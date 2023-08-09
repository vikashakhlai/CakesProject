import styles from './Button.module.scss';

const Button = ({ text, color, fontSize, width, height, borderRadius }) => {
	return (
		<button
			className={styles.button}
			style={{
				backgroundColor: color,
				fontSize: fontSize,
				width: width,
				height: height,
				borderRadius: borderRadius,
			}}
		>
			{text}
		</button>
	);
};

export default Button;
