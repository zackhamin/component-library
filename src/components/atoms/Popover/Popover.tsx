import { Size } from '@Types/css';
import {
	cloneElement,
	FC,
	PropsWithChildren,
	ReactElement,
	useEffect,
	useRef,
	useState,
} from 'react';
import { StyledPopover, StyledTrigger, StyledWrapper } from './Popover.styles';

import classNames from 'classnames';
import { Heading } from 'Atoms/Heading';
import { useClickOutside } from 'Hooks/useClickOutside';
import { useOnKeyDown } from 'Hooks/useOnKeyDown';

export interface PopoverProps {
	id: string;
	/** The title of the popover (can be visually hidden with the `hideTitle` prop) */
	title: string;
	/** Visually hide the title of the popover and only keep it visible for screen readers */
	hideTitle?: boolean;
	/**
	 * A JSX element to be used as the trigger for the popover
	 * @default false
	 */
	trigger: ReactElement;
	/**
	 * The size of the popover
	 * @default 'auto'
	 */
	width?: Size | 'auto';
	/**
	 * The gap between the trigger and the popover
	 * @default '0.8rem'
	 */
	gap?: Size;
	/**
	 * Whether the popover should be open by default
	 * @default false
	 */
	defaultOpen?: boolean;
	/**
	 * Align the popover to the left, right or center of the trigger
	 * @default 'left'
	 */
	align?: 'left' | 'right' | 'center';
}

const Popover: FC<PropsWithChildren<PopoverProps>> = ({
	children,
	id,
	title,
	hideTitle = false,
	trigger,
	width = 'auto',
	gap = '0.8rem',
	defaultOpen = false,
	align = 'left',
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const [touched, setTouched] = useState(false);

	const outsideRef = useRef(null);
	const triggerRef = useRef<HTMLElement>(null);
	const popoverRef = useRef<HTMLDivElement>(null);

	const touch = () => {
		if (!touched) setTouched(true);
	};
	const close = () => {
		setIsOpen(false);
		touch();
	};
	const toggle = () => {
		setIsOpen((prev) => !prev);
		touch();
	};

	useOnKeyDown('Escape', close);
	useClickOutside(outsideRef, close);

	const triggerProps = {
		id: `${id}-trigger`,
		onClick: toggle,
		'aria-controls': id,
		'aria-expanded': isOpen,
		ref: triggerRef,
	};

	useEffect(() => {
		if (touched) {
			if (isOpen) {
				popoverRef.current?.focus();
			} else {
				triggerRef.current?.focus();
			}
		}
	}, [isOpen, touched]);

	return (
		<StyledWrapper ref={outsideRef} align={align}>
			<StyledTrigger>{cloneElement(trigger, triggerProps)}</StyledTrigger>
			{isOpen && (
				<StyledPopover
					ref={popoverRef}
					aria-labelledby="popover-title"
					width={width}
					tabIndex={-1}
					id={id}
					gap={gap}
				>
					<Heading
						id="popover-title"
						size="1.8rem"
						className={classNames({
							'visually-hidden': hideTitle,
						})}
					>
						{title}
					</Heading>
					{children}
				</StyledPopover>
			)}
		</StyledWrapper>
	);
};

export { Popover };
