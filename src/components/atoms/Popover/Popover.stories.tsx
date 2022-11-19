import { Button } from 'Atoms/Button';
import { Popover, PopoverProps } from './Popover';

export default {
	title: 'atoms/Popover',
	component: Popover,
};

export const PopoverStory = (args: PopoverProps) => (
	<>
		<Popover {...args} />
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
			provident reprehenderit cupiditate assumenda quis recusandae tempore
			quisquam officiis, neque sunt delectus non ipsum pariatur quaerat at
			consequuntur perspiciatis alias est!
		</p>
	</>
);

PopoverStory.storyName = 'Popover';
PopoverStory.args = {
	title: 'My Popover',
	id: 'my-popover',
	children: (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et
			doloremque neque illo itaque quisquam aperiam placeat tempore saepe
			tempora nesciunt minus mollitia recusandae magni, ipsam cum consequuntur
			ipsa atque.
		</p>
	),
	trigger: <Button>Trigger me!</Button>,
	width: '50rem',
	defaultOpen: true,
	gap: '0.8rem',
	align: 'left',
};
