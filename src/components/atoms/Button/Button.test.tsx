import { Button } from './Button';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button', () => {
	it('renders a button correctly', () => {
		const { container } = render(<Button onClick={jest.fn}>Click me!</Button>);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('calls the click handler', () => {
		const clickHandler = jest.fn();
		const { getByText } = render(
			<Button onClick={clickHandler}>Click me!</Button>
		);

		const button = getByText('Click me!');
		fireEvent.click(button);

		expect(clickHandler).toHaveBeenCalledTimes(1);
	});
});

describe('Disabled Button', () => {
	it('should have disabled attr when disabled prop set', () => {
		render(<Button disabled>Click me!</Button>);

		const button = screen.getByRole('button');

		expect(button).toHaveAttribute('disabled');
	});

	it('should not call onChange when disabled', () => {
		const clickHandler = jest.fn();
		render(
			<Button disabled onClick={clickHandler}>
				Click me!
			</Button>
		);

		const button = screen.getByRole('button');

		userEvent.click(button);

		expect(clickHandler).not.toHaveBeenCalled();
	});
});
