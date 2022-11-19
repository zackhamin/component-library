import { render } from '@testing-library/react';

import { ListOption } from './ListOption';

jest.spyOn(console, 'error').mockImplementation(jest.fn);

describe('ListOption', () => {
	it('renders correctly', () => {
		const { container } = render(
			<ListOption isSelected={false} handleSelect={jest.fn}>
				Some content
			</ListOption>
		);
		expect(container).toMatchSnapshot();
	});
});
