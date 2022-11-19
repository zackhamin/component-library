import { Container, ContainerProps } from './Container';

export default {
	title: 'atoms/Container',
	component: Container,
};

export const ContainerStory = (args: ContainerProps) => <Container {...args} />;

ContainerStory.storyName = 'Container';
ContainerStory.args = {
	children: (
		<p>
			Adipisicing occaecat fugiat labore exercitation consectetur eu laboris
			aliquip fugiat. Incididunt dolor ipsum sint reprehenderit sunt quis ut
			ipsum Lorem. Amet labore laboris sit sint magna do. Reprehenderit
			consequat culpa veniam laboris adipisicing ut qui nostrud dolor elit.
		</p>
	),
};
ContainerStory.argTypes = {
	centered: {
		control: 'boolean',
	},
	marginTop: {
		control: 'text',
	},
	marginBottom: {
		control: 'text',
	},
};
