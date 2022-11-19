import { Accordion } from './Accordion';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

describe('Accordion', () => {
	const defaultProps = {
		title: 'Accordion title',
		content: 'Accordion content',
	};

	test('renders without errors and matches snapshot', () => {
		const {
			container: { firstChild },
		} = render(<Accordion {...defaultProps} />);

		expect(firstChild).toMatchSnapshot();
	});

	test('should display title and content', () => {
		const { getByText } = render(<Accordion {...defaultProps} />);
		getByText(/title/i);
	});

	test('should show content on click', () => {
		const { getByText } = render(<Accordion {...defaultProps} />);
		const accordionTitle = getByText(/title/i);
		const accordionContent = getByText(/content/i);
		fireEvent.click(accordionTitle);

		expect(accordionContent).toBeVisible();
	});

	test('should set isExpanded to false if click outside of accordion', () => {
		const { getByText, getByTestId } = render(<Accordion {...defaultProps} />);
		const accordion = getByText(/title/i) as HTMLDivElement;
		fireEvent.click(accordion);
		const chevron = getByTestId('CHEVRON') as HTMLDivElement;
		fireEvent.mouseUp(document);
		const style = window.getComputedStyle(chevron);
		expect(style.transform).toBe('');
	});

	describe('Expanded Accordion', () => {
		test('should display title and content', () => {
			const { getByText } = render(
				<Accordion {...defaultProps} expanded={true} />
			);
			const accordionTitle = getByText(/title/i);
			const accordionContent = getByText(/content/i);
			expect(accordionTitle).toBeVisible();
			expect(accordionContent).toBeVisible();
		});
	});

	describe('Disabled Accordion', () => {
		test('should display title', () => {
			const { getByText } = render(
				<Accordion {...defaultProps} disabled={true} />
			);
			getByText(/title/i);
		});

		test('should be disabled', () => {
			const { getByRole } = render(<Accordion {...defaultProps} disabled />);
			expect(getByRole('button')).toHaveAttribute('disabled');
		});

		test('should not handle click events', () => {
			const { getByText } = render(
				<Accordion {...defaultProps} disabled={true} />
			);

			const accordionTitle = getByText(/title/i);
			const accordionContent = getByText(/content/i);
			fireEvent.click(accordionTitle);

			const titleStyle = window.getComputedStyle(accordionTitle);
			const contentStyle = window.getComputedStyle(accordionContent);
			expect(titleStyle.pointerEvents).toBe('');
			expect(contentStyle.visibility).toBe('hidden');
		});
	});
});
