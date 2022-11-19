import FocusTrap from 'focus-trap-react';
import { Heading } from '..';
import { IconClose } from 'Atoms/Icons';
import { useOnKeyDown } from 'Hooks/useOnKeyDown';
import { ReactNode, useEffect } from 'react';
import { StyledBackdrop, StyledModal } from './Modal.styles';

export interface ModalProps {
	children: ReactNode;
	title: string;
	closeHandler: () => void;
}

const Modal = ({ children, closeHandler, title }: ModalProps) => {
	useOnKeyDown('Escape', closeHandler);

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	return (
		<StyledBackdrop onClick={closeHandler} data-testid="backdrop">
			<FocusTrap
				focusTrapOptions={{
					allowOutsideClick: true,
					delayInitialFocus: false,
				}}
			>
				<StyledModal
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-title"
					onClick={(e) => e.stopPropagation()}
					tabIndex={-1}
				>
					<button
						className="close"
						aria-label="Close"
						onClick={closeHandler}
						data-testid="close"
					>
						<IconClose />
					</button>
					<Heading id="modal-title">{title}</Heading>
					{children}
				</StyledModal>
			</FocusTrap>
		</StyledBackdrop>
	);
};

export { Modal };
