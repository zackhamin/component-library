import { Chevron } from 'Atoms/Icons/Chevron';
import type { ComboBoxProps } from '@react-types/combobox';
import { FormLabel } from 'Atoms/FormLabel';
import { ListBox } from './Listbox';
import { Loading } from '../../atoms/Loading';
import { Popover } from './Popover';
import React from 'react';
import {
	InputGroup,
	SpinnerWrapper,
	StyledComboButton,
	StyledInput,
	Wrapper,
} from './Combobox.styles';
import { Item, useAsyncList, useComboBoxState } from 'react-stately';
import { useButton, useComboBox, useFilter } from 'react-aria';

type LoadingState =
	| 'loading'
	| 'sorting'
	| 'loadingMore'
	| 'error'
	| 'idle'
	| 'filtering';

interface ComboBoxWithAsyncProps<T> extends ComboBoxProps<T> {
	loadingState?: LoadingState;
	onLoadMore?: () => void;
}

function ComboBox<T extends object>(props: ComboBoxWithAsyncProps<T>) {
	// Setup filter function and state.
	const { contains } = useFilter({ sensitivity: 'base' });
	const state = useComboBoxState({ ...props, defaultFilter: contains });

	// Setup refs and get props for child elements.
	const buttonRef = React.useRef(null);
	const inputRef = React.useRef(null);
	const listBoxRef = React.useRef(null);
	const popoverRef = React.useRef(null);

	const {
		buttonProps: triggerProps,
		inputProps,
		listBoxProps,
		labelProps,
	} = useComboBox(
		{
			...props,
			inputRef,
			buttonRef,
			listBoxRef,
			popoverRef,
		},
		state
	);

	const { buttonProps } = useButton(triggerProps, buttonRef);

	return (
		<Wrapper>
			<FormLabel {...labelProps}>{props.label}</FormLabel>
			<InputGroup>
				<StyledInput {...inputProps} ref={inputRef} />
				<StyledComboButton {...buttonProps} ref={buttonRef}>
					<Chevron aria-hidden="true" />
				</StyledComboButton>
				<SpinnerWrapper>
					{props.loadingState === 'loading' ||
					props.loadingState === 'filtering' ? (
						<Loading size="2.2rem" />
					) : null}
				</SpinnerWrapper>
			</InputGroup>
			{state.isOpen && (
				<Popover
					popoverRef={popoverRef}
					isOpen={state.isOpen}
					onClose={state.close}
				>
					<ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
				</Popover>
			)}
		</Wrapper>
	);
}

export { ComboBox, Item, useAsyncList };
