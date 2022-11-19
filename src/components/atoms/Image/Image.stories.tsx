import { Image, ImageProps } from './Image';
import { Meta, Story } from '@storybook/react';
import TestSvg from 'Atoms/Image/assets/TestSvg';

export default {
	title: 'atoms/Image',
	component: Image,
} as Meta;

const defaultArgs: ImageProps<'img'> = {
	as: 'img',
	src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnklEQVR42u3RAQ0AAAQAMLro30oOapj9FZ5dNcEZKUQIQoQgRAhChCBEiBAhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIESJECEKEIEQIQr5bkNXZleU60yAAAAAASUVORK5CYII=',
	alt: 'An image',
	title: 'An image',
	loading: 'lazy',
	block: false,
};

const Template: Story = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = defaultArgs;

export const BlockImage = Template.bind({});
BlockImage.args = { ...defaultArgs, block: true };

export const SvgImage = Template.bind({});
SvgImage.args = {
	as: 'svg',
	width: '500',
	height: '135',
	viewBox: '0 0 1229 135',
	fill: 'none',
	xmlns: 'http://www.w3.org/2000/svg',
	style: {
		padding: '1.4rem',
		background: '#00594c',
	},
	block: false,
	children: TestSvg,
} as ImageProps<'svg'>;

export const ObjectImage = Template.bind({});
ObjectImage.args = {
	as: 'object',
	data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnklEQVR42u3RAQ0AAAQAMLro30oOapj9FZ5dNcEZKUQIQoQgRAhChCBEiBAhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIESJECEKEIEQIQr5bkNXZleU60yAAAAAASUVORK5CYII=',
	width: 640,
	height: 360,
	margin: 'auto',
	block: false,
} as ImageProps<'object'>;
