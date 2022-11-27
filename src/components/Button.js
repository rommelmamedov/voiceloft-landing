export const Button = ({ children, content, icon, ...otherProps }) => {
	return (
		<button className="button" {...otherProps}>
			{icon}
			{children ?? content}
		</button>
	);
};
