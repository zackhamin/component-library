import { ListOption, ListOptionProps } from './ListOption';

export default {
	title: 'Atoms/ListOption',
	component: ListOption,
};

export const ListOptionStory = (args: ListOptionProps) => (
	<ListOption {...args} />
);

ListOptionStory.storyName = 'ListOption';
ListOptionStory.args = {
	children: (
		<>
			<h2>Perferendis eaque?</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
				nihil laboriosam cumque nesciunt accusamus harum.
			</p>
		</>
	),
	isSelected: false,
};
ListOptionStory.argTypes = {
	handleSelect: { action: 'selected' },
};
