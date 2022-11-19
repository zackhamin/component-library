import { Container } from '../Container';
import { render } from '@testing-library/react';

describe('Container', () => {
	it('renders correctly', () => {
		const { container } = render(
			<Container>
				<p>
					Adipisicing occaecat fugiat labore exercitation consectetur eu laboris
					aliquip fugiat. Incididunt dolor ipsum sint reprehenderit sunt quis ut
					ipsum Lorem. Amet labore laboris sit sint magna do. Reprehenderit
					consequat culpa veniam laboris adipisicing ut qui nostrud dolor elit.
				</p>
			</Container>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
