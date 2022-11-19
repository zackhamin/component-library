import { InputHTMLAttributes, PropsWithChildren } from 'react';

export interface BaseInputProps<ElementType>
	extends InputHTMLAttributes<ElementType> {
	className?: string;
	name?: string;
	id?: string;
	isDisabled?: boolean;
	isRequired?: boolean;
	children?: PropsWithChildren<any>;
}

export type ConditionalFormProps = {
	isSuccess?: boolean;
	isInvalid?: boolean;
};

export type Type = 'text' | 'email' | 'tel';
export type Wrap = 'hard' | 'soft' | 'off';

export type ReactInputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;
