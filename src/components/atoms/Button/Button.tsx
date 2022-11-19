import classNames from 'classnames';
import { forwardRef } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
	children: React.ReactNode;
	type?: 'submit' | 'button' | 'reset';
	style?: 'primary' | 'secondary' | 'icon' | 'text';
	size?: 'large' | 'medium' | 'small';
	block?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	testId?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			type,
			style = 'primary',
			size = 'large',
			block = false,
			disabled = false,
			testId,
			onClick,
			...props
		},
		ref
	) => {
		const classes = classNames(style, `btn-${size}`, {
			block,
		});

		return (
			<StyledButton
				className={classes}
				onClick={onClick}
				type={type}
				disabled={disabled}
				data-testid={testId}
				ref={ref}
				{...props}
			>
				{children}
			</StyledButton>
		);
	}
);

export { Button };
