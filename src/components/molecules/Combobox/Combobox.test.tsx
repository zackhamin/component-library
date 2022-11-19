import { OverlayContainer } from '@react-aria/overlays';
import userEvent from '@testing-library/user-event';
import { ComboBox, Item } from './Combobox';
import { fireEvent, render, screen } from '@testing-library/react';

const renderCombobox = () => {
	return render(
		<OverlayContainer>
			<ComboBox label="Test Heading">
				<Item key="red panda">Red Panda</Item>
				<Item key="cat">Cat</Item>
				<Item key="dog">Dog</Item>
				<Item key="aardvark">Aardvark</Item>
				<Item key="snake">Snake</Item>
			</ComboBox>
		</OverlayContainer>
	);
};

describe('Combobox', () => {
	it(' Should render correctly', () => {
		const { container } = render(
			<OverlayContainer>
				<ComboBox label="Test Heading">
					<Item key="red panda">Red Panda</Item>
					<Item key="cat">Cat</Item>
					<Item key="dog">Dog</Item>
					<Item key="aardvark">Aardvark</Item>
					<Item key="kangaroo">Kangaroo</Item>
					<Item key="snake">Snake</Item>
				</ComboBox>
			</OverlayContainer>
		);
		expect(container).toMatchSnapshot();
	});

	it('should display the correct number of options', () => {
		renderCombobox();

		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(screen.getAllByRole('option').length).toBe(5);
	});
});

describe('Listbox should show on click', () => {
	it(' Should render a listbox when button clicked', () => {
		renderCombobox();

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(screen.getByRole('listbox')).toBeInTheDocument();
	});
});

describe('User Input', () => {
	it('should be possible for a user to select an option', async () => {
		renderCombobox();

		const button = screen.getByRole('button');
		const input = screen.getByRole('combobox');

		userEvent.click(button);
		userEvent.click(screen.getByText('Cat'));

		expect(input).toHaveValue('Cat');
	});

	it('should show listbox with option when user types in input', () => {
		renderCombobox();

		const input = screen.getByRole('combobox');

		userEvent.type(input, 'Ca');

		expect(screen.getByRole('listbox')).toBeInTheDocument();
		expect(screen.getByRole('option')).toHaveTextContent('Cat');
	});

	it('should clear input when invalid input added and enter pressed', () => {
		renderCombobox();

		const input = screen.getByRole('combobox');

		userEvent.type(input, 'X');
		userEvent.type(input, '{enter}');

		expect(input).toHaveValue('');
	});

	it('should clear input when invalid input added and click outside', () => {
		renderCombobox();

		const input = screen.getByRole('combobox');

		userEvent.type(input, 'X');
		userEvent.click(document.body);

		expect(input).toHaveValue('');
	});
});
