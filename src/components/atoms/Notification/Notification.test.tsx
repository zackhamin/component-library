import { fireEvent, render } from '@testing-library/react';

import { Notification } from '../Notification';

describe('Notification', () => {
	const defaultProps = {
		color: '#000',
		backgroundColor: '#fff',
		hasBorder: true,
		isDismissible: true,
	};

	it('renders correctly with a dismiss button', () => {
		const { container } = render(
			<Notification {...defaultProps}>
				<span>This is a notification</span>
			</Notification>
		);
		expect(container).toMatchSnapshot();
	});

	it('renders correctly without a dismiss button', () => {
		const { container } = render(
			<Notification {...defaultProps} isDismissible={false}>
				<span>This is a non dismissable notification</span>
			</Notification>
		);
		expect(container).toMatchSnapshot();
	});

	it('removes the notification from the DOM when the dismiss button is clicked', () => {
		const { getByTestId } = render(
			<Notification {...defaultProps}>
				<span>This is a notification</span>
			</Notification>
		);

		const notificationComponent = getByTestId('notification');
		const dismissButton = getByTestId('dismiss-button');
		fireEvent.click(dismissButton);
		expect(notificationComponent).not.toBeVisible();
	});
});
