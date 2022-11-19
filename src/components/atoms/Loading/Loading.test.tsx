import { Loading } from '../Loading';
import { Size } from '@Types/css';
import { render, screen } from '@testing-library/react';

describe('Loading', () => {
	it('renders correctly', () => {
		const { container } = render(<Loading />);
		expect(container).toMatchSnapshot();
	});

	it('renders correctly with props', () => {
		const props = {
			children: 'children',
			color: 'black',
			size: '1em' as Size,
		};
		const { container } = render(<Loading {...props} />);

		const loading = screen.getByText(props.children);

		expect(loading).toBeInTheDocument();
		expect(loading).toHaveStyle({
			width: props.size,
			height: props.size,
		});
		expect(loading.getAttribute('color')).toBe(props.color);
	});
});
