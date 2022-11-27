export const Button = ({ content, ...otherProps }) => {
	return (
		<button className="button" {...otherProps}>
			{content}
		</button>
	);
};
