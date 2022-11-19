import { Image } from 'Atoms/Image';
import TestSvg from 'Atoms/Image/assets/TestSvg';
import { render, screen } from '@testing-library/react';

describe('Image', () => {
	it('Renders an Image component correctly', () => {
		const { container } = render(
			<Image
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnklEQVR42u3RAQ0AAAQAMLro30oOapj9FZ5dNcEZKUQIQoQgRAhChCBEiBAhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIESJECEKEIEQIQr5bkNXZleU60yAAAAAASUVORK5CYII="
				alt={'alt'}
				title={'title'}
			/>
		);

		const image = screen.getByRole('img');

		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('alt', 'alt');
		expect(image).toHaveAttribute('title', 'title');
		expect(container).toMatchSnapshot();
	});

	it('Renders an SVG Image correctly', () => {
		const { container } = render(
			<Image
				as={'svg'}
				role={'img'}
				aria-label={'Description of your SVG image'}
			>
				{TestSvg}
			</Image>
		);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(
			screen.getByLabelText('Description of your SVG image')
		).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('Renders an Object Image correctly', () => {
		const { container } = render(
			<Image
				as={'object'}
				role={'img'}
				aria-label={'Description of your Object image'}
				data={
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnklEQVR42u3RAQ0AAAQAMLro30oOapj9FZ5dNcEZKUQIQoQgRAhChCBEiBAhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIESJECEKEIEQIQr5bkNXZleU60yAAAAAASUVORK5CYII='
				}
				width={640}
				height={360}
			/>
		);

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(
			screen.getByLabelText('Description of your Object image')
		).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
