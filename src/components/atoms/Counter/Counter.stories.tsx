import { Story } from '@storybook/react';
import { useState } from 'react';

import { FormControl } from 'Molecules/FormControl';
import { FormLabel } from 'Atoms/FormLabel';
import { TextInput } from 'Atoms/TextInput';
import { Counter, CounterProps } from './Counter';

export default {
	title: 'Atoms/Counter',
	component: Counter,
	args: {
		current: 0,
		max: 10,
		fontSize: '1.6rem',
	},
};

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

const InputTemplate: Story<CounterProps> = (args) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<FormControl id="testId" name="testName">
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'baseline',
				}}
			>
				<FormLabel>Label</FormLabel>
				<Counter current={inputValue.length} max={args.max} />
			</div>
			<TextInput onChange={(e) => setInputValue(e.target.value)} />
		</FormControl>
	);
};

export const Default = Template.bind({});

export const NoMaxValue = Template.bind({});
NoMaxValue.args = {
	max: undefined,
};

export const Input = InputTemplate.bind({});
Input.args = {
	max: 100,
};

export const InputWithNoMaxValue = InputTemplate.bind({});
InputWithNoMaxValue.args = {
	max: undefined,
};
