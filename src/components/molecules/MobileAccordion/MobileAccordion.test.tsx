import { act } from 'react-dom/test-utils';
import { MobileAccordion } from './MobileAccordion';
import { fireEvent, render } from '@testing-library/react';

describe('MobileAccordion', () => {
	const defaultProps = {
		title: 'Mobile accordion title',
		content: 'Mobile accordion content',
	};

	test('renders without errors and matches snapshot', () => {
		const {
			container: { firstChild },
		} = render(<MobileAccordion {...defaultProps} />);

		expect(firstChild).toMatchSnapshot();
	});

	describe('Desktop view', () => {
		test('should display title and content', () => {
			const { getByText } = render(<MobileAccordion {...defaultProps} />);
			const accordionTitle = getByText(/title/i);
			const accordionContent = getByText(/content/i);
			expect(accordionTitle).toBeVisible();
			expect(accordionContent).toBeVisible();
		});

		test('Should not have a button to show content', () => {
			const { queryByRole } = render(<MobileAccordion {...defaultProps} />);
			const button = queryByRole('button');
			expect(button).toBeNull();
		});
	});

	describe('Mobile view', () => {
		test('should display title, button and icon', () => {
			act(() => {
				global.innerWidth = 500;
				global.dispatchEvent(new Event('resize'));
			});
			const { getByRole, getByTestId, getByText, queryByText } = render(
				<MobileAccordion {...defaultProps} />
			);
			const accordionTitle = getByText(/title/i);
			const accordionContent = queryByText(/content/i);
			const button = getByRole('button');
			const plusIcon = getByTestId('PLUS');

			expect(accordionTitle).toBeVisible();
			expect(button).toBeVisible();
			expect(plusIcon).toBeVisible();
			expect(accordionContent).not.toBeVisible();
		});

		test('should show content and updated icon on click', () => {
			act(() => {
				global.innerWidth = 500;
				global.dispatchEvent(new Event('resize'));
			});
			const { getByRole, getByTestId, getByText } = render(
				<MobileAccordion {...defaultProps} />
			);
			const button = getByRole('button');
			fireEvent.click(button);

			const accordionContent = getByText(/content/i);
			const minusIcon = getByTestId('MINUS');
			expect(accordionContent).toBeVisible();
			expect(minusIcon).toBeVisible();
		});

		test('should show content when expanded is true', () => {
			act(() => {
				global.innerWidth = 500;
				global.dispatchEvent(new Event('resize'));
			});
			const { getByText } = render(
				<MobileAccordion {...defaultProps} expanded={true} />
			);

			const accordionContent = getByText(/content/i);
			expect(accordionContent).toBeVisible();
		});
	});
});
