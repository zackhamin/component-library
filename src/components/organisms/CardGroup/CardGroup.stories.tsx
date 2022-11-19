import { CardGroup, CardGroupProps } from './CardGroup';
import { Card } from 'Molecules/Card';
import { Text } from 'Atoms/Text';
import { Image } from 'Atoms/Image';

export default {
	title: 'organisms/CardGroup',
	component: CardGroup,
};

export const Template = (args: CardGroupProps) => <CardGroup {...args} />;

Template.storyName = 'CardGroup';
Template.args = {
	children: (
		<>
			<Card
				image={
					<Image
						src={
							'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnklEQVR42u3RAQ0AAAQAMLro30oOapj9FZ5dNcEZKUQIQoQgRAhChCBEiBAhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIESJECEKEIEQIQr5bkNXZleU60yAAAAAASUVORK5CYII='
						}
					/>
				}
			>
				<Text>Red</Text>
			</Card>
			<Card
				image={
					<Image
						src={
							'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAoElEQVR42u3RAQ0AMAgAoNvlwSxvDq3hHFQgflY/1gghQhAiBCFCECIEIUKECEGIEIQIQYgQhAhBCEKEIEQIQoQgRAhCECIEIUIQIgQhQhCCECEIEYIQIQgRghCECEGIEIQIQYgQhCBECEKEIEQIQoQgBCFCECIEIUIQIgQhCBGCECEIEYIQIQhBiBCECEGIEIQIQYgQIUIQIgQhQhBy3QA05/EFbfI86QAAAABJRU5ErkJggg=='
						}
					/>
				}
			>
				<Text>Blue</Text>
			</Card>
			<Card
				image={
					<Image
						src={
							'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAoUlEQVR42u3RAQ0AMAgAoNvlFeyfxhxawzmoQPzKfqwRQoQgRAhChCBECEKECBGCECEIEYIQIQgRghCECEGIEIQIQYgQhCBECEKEIEQIQoQgBCFCECIEIUIQIgQhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQIUKEIEQIQoQg5LoBnELgOTqoyNsAAAAASUVORK5CYII='
						}
					/>
				}
			>
				<Text>Green</Text>
			</Card>
			<Card
				image={
					<Image
						src={
							'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnUlEQVR42u3RAQ0AAAgDIO3fzUq3hnNQgc5UijNaiBCECEGIEIQIQYgQIUIQIgQhQhAiBCFCEIIQIQgRghAhCBGCEIQIQYgQhAhBiBCEIEQIQoQgRAhChCAEIUIQIgQhQhAiBCEIEYIQIQgRghAhCEGIEIQIQYgQhAhBCEKEIEQIQoQgRAhCECIEIUIQIgQhQhAiRIgQhAhBiBCEfLdGDBgklKcbOgAAAABJRU5ErkJggg=='
						}
					/>
				}
			>
				<Text>Yellow</Text>
			</Card>
		</>
	),
};
