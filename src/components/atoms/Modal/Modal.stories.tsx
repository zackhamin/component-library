import { useState } from 'react';
import { Modal, ModalProps } from './Modal';

export default {
	title: 'atoms/Modal',
	component: Modal,
};

export const ModalStory = (args: ModalProps) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleOpen = () => setIsOpen((prev) => !prev);

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				background: 'url(https://source.unsplash.com/random)',
				backgroundSize: 'cover',
			}}
		>
			<button onClick={toggleOpen}>Open Modal</button>
			{isOpen && <Modal {...args} closeHandler={toggleOpen} />}
		</div>
	);
};

ModalStory.storyName = 'Modal';
ModalStory.parameters = {
	layout: 'fullscreen',
};
ModalStory.args = {
	title: 'My Modal',
	children: (
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
			doloribus alias quis iste amet! Neque molestias itaque officia at nam
			quaerat ipsam velit quisquam, deserunt, eveniet quidem sint, pariatur vel.
		</p>
	),
};
ModalStory.argTypes = {
	closeHandler: { action: 'closed' },
};
