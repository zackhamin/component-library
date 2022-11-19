import { ComboBox, Item, useAsyncList } from './Combobox';
import { Meta, Story } from '@storybook/react';
import docs from './Combobox.mdx';

export default {
	title: 'molecules/Combobox',
	component: ComboBox,
	parameters: {
		docs: {
			page: docs,
		},
	},
} as Meta;

const Template: Story = (args) => {
	return (
		<>
			<ComboBox {...args}>
				<Item key="red panda">Red Panda</Item>
				<Item key="cat">Cat</Item>
				<Item key="dog">Dog</Item>
				<Item key="aardvark">Aardvark</Item>
				<Item key="kangaroo">Kangaroo</Item>
				<Item key="snake">Snake</Item>
			</ComboBox>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Custom label',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
	label: 'Custom label',
	defaultInputValue: 'kangaroo',
};

export const DisabledItems = Template.bind({});
DisabledItems.args = {
	disabledKeys: ['kangaroo', 'cat'],
};

const AsyncTemplate: Story = () => {
	const results = useAsyncList<{ name: string }>({
		async load({ signal, filterText }) {
			const res = await fetch(
				`https://swapi.dev/api/people/?search=${filterText}`,
				{ signal }
			);

			const json = await res.json();

			return {
				items: json.results,
				cursor: json.next,
			};
		},
	});

	return (
		<>
			<ComboBox
				label="Star Wars Character Search"
				items={results.items}
				inputValue={results.filterText}
				onInputChange={results.setFilterText}
				loadingState={results.loadingState}
				onLoadMore={results.loadMore}
			>
				{(item) => <Item key={item.name}>{item.name}</Item>}
			</ComboBox>
		</>
	);
};

export const AsyncCombobox = AsyncTemplate.bind({});
