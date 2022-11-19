import { colors } from '../../../styles';
import { forwardRef } from 'react';
import { HeadingProps } from './Heading.types';
import { StyledHeaderText } from './Heading.styles';

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	(
		{
			level = 2,
			children,
			align,
			family = 'heading',
			colour = colors.offBlack,
			size = '2.6rem',
			id,
			...rest
		},
		ref
	) => {
		const headingSize = `h${level}`;

		return (
			// @ts-expect-error children needs to be checked
			<StyledHeaderText
				// @ts-expect-error code works as expected but seems to cause a type error with no real indication as to why
				as={headingSize}
				align={align}
				family={family}
				colour={colour}
				textSize={size}
				id={id}
				ref={ref}
				{...rest}
			>
				{children}
			</StyledHeaderText>
		);
	}
);

export { Heading };
