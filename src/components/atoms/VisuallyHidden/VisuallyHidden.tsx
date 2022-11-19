import React from 'react';
import { StyledHiddenSpan } from './VisuallyHidden.styles';

export interface VisuallyHiddenProps {
	children: React.ReactNode;
}

const VisuallyHiddenSpan = ({ children }: VisuallyHiddenProps) => {
	return <StyledHiddenSpan>{children}</StyledHiddenSpan>;
};

export { VisuallyHiddenSpan };
