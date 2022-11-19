import { StyledChip } from './Chip.styles';

export interface ChipProps<Component extends React.ElementType> {
	as?: Component;
	children: React.ReactNode;
	icon?: React.ReactNode;
	variant?: 'default' | 'topic';
	ariaLabel?: string;
}

// https://www.benmvp.com/blog/polymorphic-react-components-typescript/
export type PolymorphicChipProps<E extends React.ElementType> = ChipProps<E> &
	Omit<React.ComponentProps<E>, keyof ChipProps<E>>;

const Chip = <Component extends React.ElementType = 'button'>({
	as,
	children,
	icon,
	ariaLabel,
	variant = 'default',
	...rest
}: PolymorphicChipProps<Component>) => {
	const tag = as || 'button';

	return (
		<StyledChip
			icon={icon}
			aria-label={ariaLabel}
			className={`variant-${variant}`}
			as={tag}
			{...rest}
		>
			{icon && <div className="icon-wrapper">{icon}</div>}
			{children}
		</StyledChip>
	);
};

export { Chip };
