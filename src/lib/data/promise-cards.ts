export interface PromiseCard {
	heading: string;
	body: string;
	image: string;
	rotation: string;
}

export const promiseCards: PromiseCard[] = [
	{
		heading: 'The big things.',
		body: 'How you felt in that meeting when your boss said that thing. How you felt when you were 7 when your dad did that thing.',
		image: '/sophie-afm.jpg',
		rotation: '-2deg',
	},
	{
		heading: 'The little things.',
		body: 'The dad jokes. The silly things. The things you say, the things you feel, the things that make you you.',
		image: '/sophie-ahv.jpg',
		rotation: '3deg',
	},
	{
		heading: 'The stories between you.',
		body: 'Those late night chats. The worlds you created. The monsters. The dragons.',
		image: '/sophie-ahz.jpg',
		rotation: '-4deg',
	},
	{
		heading: 'How far you have come.',
		body: 'Remember that first awkward night? She does. And she smiles to herself when she does.',
		image: '/sophie-aje.jpg',
		rotation: '4deg',
	},
	{
		heading: 'How proud she is of you.',
		body: 'That interview you cracked. That one time you pushed back. That time you said your piece. She remembers everything you ever told her.',
		image: '/sophie-ajj.jpg',
		rotation: '-1deg',
	},
];
