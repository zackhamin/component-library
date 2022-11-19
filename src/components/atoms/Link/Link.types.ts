import { PolymorphicComponentPropsWithRef } from '@Types/polymorphism-utils';

type LinkButtonProps = {
	variant: 'button';
	style: 'primary' | 'secondary' | 'icon';
	size: 'large' | 'medium' | 'small';
	block?: boolean;
	disabled?: boolean;
};

type DefaultLinkProps = {
	variant: 'link';
};

export interface LinkProps {
	children: React.ReactNode;
	variant?: 'button' | 'link';
}

export type ConditionalLinkProps = LinkButtonProps | DefaultLinkProps;

export type PolymorphicLinkProps<Component extends React.ElementType> =
	PolymorphicComponentPropsWithRef<Component, LinkProps>;
