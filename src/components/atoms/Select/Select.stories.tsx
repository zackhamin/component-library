import { ChangeEvent } from 'react';
import { Option } from './Option';
import { Story } from '@storybook/react';
import { Select, SelectCombinedProps } from './Select';

export default {
	title: 'atoms/Select',
	component: Select,
};

const Template: Story<SelectCombinedProps> = (args) => <Select {...args} />;

const defaultProps = {
	placeholder: 'Test placeholder',
	id: 'testId',
	name: 'testName',
	onChange: (e: ChangeEvent<HTMLSelectElement>) => console.log(e.target.value),
	children: (
		<>
			<Option value="test1">test</Option>
			<Option value="test2">test 2</Option>
		</>
	),
};

export const Default = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...defaultProps,
	isDisabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
	...defaultProps,
	isInvalid: true,
};

export const Large = Template.bind({});
Large.args = {
	...defaultProps,
	size: 'large',
};

export const Small = Template.bind({});
Small.args = {
	...defaultProps,
	size: 'small',
	children: (
		<>
			<Option value="1">1</Option>
			<Option value="2">2</Option>
			<Option value="3">3</Option>
		</>
	),
};

export const WithoutPlaceholder = Template.bind({});
WithoutPlaceholder.args = {
	...defaultProps,
	children: (
		<>
			<Option value="1">1</Option>
			<Option value="2">2</Option>
			<Option value="3">3</Option>
		</>
	),
	placeholder: undefined,
};
