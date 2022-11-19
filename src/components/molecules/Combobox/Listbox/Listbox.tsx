import { ListState } from 'react-stately';
import { Option } from './ListboxOption';
import React from 'react';
import { StyledList } from './Listbox.styles';
import { AriaListBoxOptions, useListBox } from 'react-aria';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
	listBoxRef?: React.RefObject<HTMLUListElement>;
	state: ListState<object>;
}

export function ListBox(props: ListBoxProps) {
	const ref = React.useRef<HTMLUListElement>(null);
	const { listBoxRef = ref, state } = props;
	const { listBoxProps } = useListBox(props, state, listBoxRef);

	return (
		<StyledList {...listBoxProps} ref={listBoxRef}>
			{Array.from(state.collection).map((item) => (
				<Option key={item.key} item={item} state={state} />
			))}
		</StyledList>
	);
}
