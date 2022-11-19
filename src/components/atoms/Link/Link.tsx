import classNames from 'classnames';
import { forwardRef } from 'react';
import { PolymorphicRef } from '@Types/polymorphism-utils';
import { StyledLink } from './Link.styles';
import { ConditionalLinkProps, PolymorphicLinkProps } from './Link.types';

const Link = forwardRef(
	<Component extends React.ElementType = 'a'>(
		{
			as,
			children,
			style,
			size,
			block,
			disabled = false,
			variant = 'link',
			...rest
		}: PolymorphicLinkProps<Component> & ConditionalLinkProps,
		ref?: PolymorphicRef<Component>
	) => {
		const tag = as || 'a';

		const classes = classNames(style, {
			[`variant-${variant}`]: variant,
			[`btn-${size}`]: size,
			block,
		});

		return (
			<StyledLink
				ref={ref}
				className={classes}
				as={disabled ? 'span' : tag}
				disabled={disabled}
				{...rest}
			>
				{children}
			</StyledLink>
		);
	}
);

export { Link };
