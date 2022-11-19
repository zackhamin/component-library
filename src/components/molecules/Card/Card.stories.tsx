import { Button } from 'Atoms/Button';
import { Heading } from 'Atoms/Heading';
import { Image } from 'Atoms/Image';
import { Link } from 'Atoms/Link';
import { Select } from 'Atoms/Select';
import TestSvg from 'Atoms/Image/assets/TestSvg';
import { Text } from 'Atoms/Text';
import { Card, CardProps } from './Card';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'molecules/Card',
	component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => {
	return <Card {...args}>{args.children}</Card>;
};

const defaultArgs = {
	image: (
		<Image
			as="img"
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnklEQVR42u3RAQ0AAAQAMLro30oOapj9FZ5dNcEZKUQIQoQgRAhChCBEiBAhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIESJECEKEIEQIQr5bkNXZleU60yAAAAAASUVORK5CYII="
			alt="An image"
			title="An image"
			loading="lazy"
		/>
	),
};

export const Default = Template.bind({});
Default.args = {
	image: defaultArgs.image,
	children: (
		<>
			<Heading size={'2.2rem'} level={3}>
				This has
			</Heading>
			<Text>An Image</Text>
		</>
	),
};

export const NoImage = Template.bind({});
NoImage.args = {
	children: (
		<>
			<Heading size={'2.2rem'} level={3}>
				Whilst this has
			</Heading>
			<Text>No Image</Text>
		</>
	),
};

export const ImageWithLink = Template.bind({});
ImageWithLink.args = {
	image: defaultArgs.image,
	children: (
		<Link
			as={'a'}
			href={'https://www.hollandandbarrett.com/'}
			target={'_blank'}
		>
			<Heading size={'2.2rem'} level={3}>
				Image with link
			</Heading>
			<Text>Please click the link</Text>
		</Link>
	),
};

export const InputComponents = Template.bind({});
InputComponents.args = {
	image: defaultArgs.image,
	children: (
		<>
			<Select options={[1, 2, 3, 4, 5]} />
			<br />
			<Button title={'Click here'}>Click here</Button>
		</>
	),
};

export const CustomImage = Template.bind({});
CustomImage.args = {
	image: (
		<Image
			as="svg"
			width="1229"
			height="135"
			viewBox="0 0 1229 135"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				padding: '1.4rem',
				background: '#00594c',
			}}
		>
			{TestSvg}
		</Image>
	),
	children: (
		<Link href={'https://www.hollandandbarrett.com/'} target={'_blank'} block>
			<Button block>Visit HnB</Button>
		</Link>
	),
};
