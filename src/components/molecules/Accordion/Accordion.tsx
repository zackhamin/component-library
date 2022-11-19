import { Chevron } from 'Atoms/Icons';
import { isEventValid } from '../../../utils/utils';
import React, { CSSProperties, ReactNode, useRef, useState } from 'react';
import {
	StyledAccordion,
	StyledAccordionArrow,
	StyledAccordionContent,
	StyledAccordionTitle,
} from './Accordion.style';

export interface AccordionProps {
	id?: string;
	className?: string;
	style?: CSSProperties;
	title: string | ReactNode;
	content?: string | ReactNode;
	disabled?: boolean;
	expanded?: boolean;
	subtitle?: string | ReactNode;
	testId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
	title,
	content,
	disabled,
	expanded,
	subtitle,
	testId,
	...props
}) => {
	if (expanded != true) {
		expanded = false;
	}
	const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
	const accordionRef = useRef<HTMLDivElement>(null);

	const toggleIsExpanded = (event: any) =>
		isEventValid(event) &&
		!disabled &&
		setIsExpanded((prevIsExpanded) => !prevIsExpanded);

	return (
		<StyledAccordion {...props} ref={accordionRef}>
			<StyledAccordionTitle
				role="button"
				tabIndex={disabled ? -1 : 0}
				aria-disabled={disabled}
				aria-expanded={isExpanded}
				onClick={toggleIsExpanded}
				onKeyDown={toggleIsExpanded}
				disabled={disabled}
				isExpanded={isExpanded}
				data-testid={testId}
			>
				<h2>
					{title}
					<span>{subtitle}</span>
				</h2>
				<StyledAccordionArrow isExpanded={isExpanded}>
					<Chevron fontSize="1.4rem" data-testid="CHEVRON" />
				</StyledAccordionArrow>
			</StyledAccordionTitle>

			<StyledAccordionContent isExpanded={isExpanded}>
				{content}
			</StyledAccordionContent>
		</StyledAccordion>
	);
};
