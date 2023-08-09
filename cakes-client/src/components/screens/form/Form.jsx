import styles from './Form.module.scss';

const Form = () => {
	return (
		<section>
			<div className={styles.square}>
				<h3>To place an order, enter your phone number</h3>
				<p>We will call you back within 15 minutes to clarify your wishes</p>
				<form action='#'>
					<input
						type='text'
						className={styles.number}
						placeholder='Phone number'
					/>
					<input
						type='button'
						value='Make an order'
						className={styles.callBtn}
					/>
					<div className={styles.formGroup}>
						<label htmlFor='checkbox' className={styles.checkbox}>
							By clicking on the button, you agree to the terms of personal data
							processing
						</label>
						<input type='checkbox' className={styles.check} id='checkbox' />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Form;
