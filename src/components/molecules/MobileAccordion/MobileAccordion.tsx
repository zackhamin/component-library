import { Heading } from 'Atoms/Heading';
import { isEventValid } from 'Utils/utils';
import { IconMinus, IconPlus } from 'Atoms/Icons';
import React, { ReactNode, useEffect, useState } from 'react';
import {
	StyledMobileAccordion,
	StyledMobileAccordionContent,
	StyledMobileAccordionFooter,
	StyledMobileAccordionIcon,
	StyledMobileAccordionTitle,
} from './MobileAccordion.style';

export type MobileAccordionProps = React.HTMLAttributes<HTMLDivElement> & {
	title: string;
	content?: ReactNode;
	expanded?: boolean;
	maxScreenWidth?: number;
	footer?: ReactNode;
};

export const MobileAccordion = ({
	title,
	content,
	expanded,
	maxScreenWidth = 768,
	footer,
	...props
}: MobileAccordionProps) => {
	if (expanded != true) {
		expanded = false;
	}
	const [isMobile, setIsMobile] = useState<boolean>(
		window.innerWidth <= maxScreenWidth
	);
	const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= maxScreenWidth);
		}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});

	const toggleIsExpanded = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		isEventValid(event) && setIsExpanded((prevIsExpanded) => !prevIsExpanded);
	};

	return (
		<StyledMobileAccordion {...props}>
			<StyledMobileAccordionTitle>
				<Heading level={2} size="1.6rem">
					{title}
				</Heading>
				{isMobile ? (
					<StyledMobileAccordionIcon
						aria-expanded={isExpanded}
						aria-label={title}
						onClick={toggleIsExpanded}
					>
						{isExpanded ? (
							<IconMinus fontSize="1.6rem" data-testid="MINUS" />
						) : (
							<IconPlus fontSize="1.6rem" data-testid="PLUS" />
						)}
					</StyledMobileAccordionIcon>
				) : null}
			</StyledMobileAccordionTitle>

			<StyledMobileAccordionContent isExpanded={!isMobile || isExpanded}>
				{content}
			</StyledMobileAccordionContent>

			{footer && (
				<StyledMobileAccordionFooter>{footer}</StyledMobileAccordionFooter>
			)}
		</StyledMobileAccordion>
	);
};
