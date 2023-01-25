import classNames from 'classnames';

export const Button = ({ children, content, icon, className, ...otherProps }) => {
	return (
		<button className={classNames('button', className)} {...otherProps}>
			{icon}
			{children ?? content}
		</button>
	);
};
