import { Modal } from '../Modal';
import { fireEvent, render } from '@testing-library/react';

jest.mock('focus-trap-react', () => ({
	__esModule: true,
	default: ({ children }: any) => <div id="focus-trap">{children}</div>,
}));

describe('Modal', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Modal title="My Modal" closeHandler={jest.fn}>
				Modal Content
			</Modal>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('calls close handler on click of backdrop and close button', () => {
		const closeHandler = jest.fn();
		const { getByTestId } = render(
			<Modal title="My Modal" closeHandler={closeHandler}>
				Modal Content
			</Modal>
		);

		const backdrop = getByTestId('backdrop');
		const closeButton = getByTestId('close');

		fireEvent.click(backdrop);
		fireEvent.click(closeButton);
		expect(closeHandler).toHaveBeenCalledTimes(2);
	});
});
