import { Check } from 'Atoms/Icons/Check';
import { colors } from 'Styles';
import { ListState } from 'react-stately';
import { Node } from '@react-types/shared';
import React from 'react';
import { useOption } from 'react-aria';
import { ItemContent, ListItem } from './Listbox.styles';

interface OptionsProps<T> {
	item: Node<T>;
	state: ListState<object>;
}

export function Option<T>({ item, state }: OptionsProps<T>) {
	const ref = React.useRef<HTMLLIElement>(null);
	const { optionProps, isSelected, isFocused } = useOption(
		{
			key: item.key,
		},
		state,
		ref
	);

	return (
		<ListItem
			{...optionProps}
			ref={ref}
			isFocused={isFocused}
			isSelected={isSelected}
		>
			<ItemContent>{item.rendered}</ItemContent>
			{isSelected && <Check color={colors.emerald} aria-hidden="true" />}
		</ListItem>
	);
}
