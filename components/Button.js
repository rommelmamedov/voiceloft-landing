import styles from '@styles/components/Button.module.css';

export const Button = ({ content, ...otherProps }) => {
	return (
		<button className={styles.button} {...otherProps}>
			{content}
		</button>
	);
};
