import classNames from 'classnames';
import { StyledImage } from './styles';
import { ElementType, forwardRef } from 'react';
import {
	PolymorphicComponentProps,
	PolymorphicRef,
} from '@Types/polymorphism-utils';

export type ImageProps<Component extends ElementType> =
	PolymorphicComponentProps<Component> & {
		block?: boolean;
	};

const Image = forwardRef(
	<Component extends ElementType = 'img'>(
		{ as, block, ...props }: ImageProps<Component>,
		ref?: PolymorphicRef<Component>
	) => {
		const classes = classNames({
			block,
		});

		const tag = as || 'img';
		return <StyledImage ref={ref} as={tag} {...props} className={classes} />;
	}
);

export { Image };
