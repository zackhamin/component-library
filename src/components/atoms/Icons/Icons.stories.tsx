import { ReactNode } from 'react';

import {
	IconLinkedin,
	IconYoutube,
	IconTiktok,
	IconWhatsapp,
	IconLinkedin1,
	IconTwitter1,
} from '.';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'Atoms/Icons',
	component: IconLinkedin,
	argTypes: {
		fontSize: {
			description: 'Sets the size of the icon',
			control: {
				type: 'text',
			},
		},
		color: {
			control: {
				type: 'color',
			},
		},
	},
} as Meta;

const iconsContact = [
	IconLinkedin,

	IconYoutube,

	IconTiktok,
	IconWhatsapp,
	IconLinkedin1,
	IconTwitter1,
];

const IconWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div style={{ fontSize: '3.8rem', textAlign: 'center' }}>{children}</div>
	);
};

const IconsWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div
			style={{
				display: 'flex',
				gap: '6rem',
				flexWrap: 'wrap',
			}}
		>
			{children}
		</div>
	);
};

const TemplateContact: Story = (args) => {
	return (
		<IconsWrapper>
			{iconsContact.map((Icon) => {
				return (
					<IconWrapper key={Icon.name}>
						<Icon fontSize={args.fontSize} color={args.color} />
						<pre
							style={{ fontSize: '1.4rem', marginTop: 4 }}
						>{`<${Icon.name.replace('Svg', '')} />`}</pre>
					</IconWrapper>
				);
			})}
		</IconsWrapper>
	);
};

export const ContactIcons = TemplateContact.bind({});
