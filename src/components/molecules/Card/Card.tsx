import { StyledCard } from './styles';
import { ReactElement, ReactNode } from 'react';

export type CardProps = {
	image?: ReactElement<HTMLOrSVGImageElement | HTMLObjectElement | unknown>;
	children: ReactNode;
};

const Card = ({ children, image }: CardProps) => {
	if (image) {
		return (
			<StyledCard>
				<div className={'card-image'}>{image}</div>
				<figcaption className={'card-text'}>{children}</figcaption>
			</StyledCard>
		);
	}

	return (
		<StyledCard as={'div'}>
			<div className={'card-text'}>{children}</div>
		</StyledCard>
	);
};

export { Card };
