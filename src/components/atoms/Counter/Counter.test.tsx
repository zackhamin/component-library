import { colors } from 'Styles';
import { Counter } from './Counter';
import { render } from '@testing-library/react';

describe('Counter', () => {
	it('renders correctly', () => {
		const { container } = render(<Counter current={0} max={100} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('shows current value in red if current is larger than max', () => {
		const { container } = render(<Counter current={101} max={100} />);

		expect(container.firstChild).toHaveStyle(`color: ${colors.error}`);
	});
});
