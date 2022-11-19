import classNames from 'classnames';
import { colors } from 'Styles';
import { StyledNotification } from './Notification.styles';
import { forwardRef, ReactNode, useState } from 'react';

export interface NotificationProps {
	children: ReactNode;
	color?: string;
	backgroundColor?: string;
	hasBorder?: boolean;
	isDismissible?: boolean;
	margin?: string;
	rest?: any;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
	(
		{
			children,
			color = colors.emerald,
			backgroundColor = colors.white,
			hasBorder = true,
			isDismissible = false,
			margin,
			...rest
		},
		ref
	) => {
		const [isDismissed, setIsDismissed] = useState(false);

		return (
			<StyledNotification
				color={color}
				backgroundColor={backgroundColor}
				hasBorder={hasBorder}
				data-testid="notification"
				className={classNames({ dismissed: isDismissed })}
				aria-hidden={isDismissed}
				margin={margin}
				ref={ref}
				{...rest}
			>
				{children}
				{isDismissible && (
					<button
						aria-label="Dismiss notification"
						onClick={() => setIsDismissed(true)}
						data-testid="dismiss-button"
					>
						&times;
					</button>
				)}
			</StyledNotification>
		);
	}
);
