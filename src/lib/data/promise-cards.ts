export interface PromiseCard {
	heading: string;
	body: string;
	image: string;
	rotation: string;
}

export const promiseCards: PromiseCard[] = [
	{
		heading: 'The big things.',
		body: 'How you felt in that meeting when your boss said that thing. Or that song you can\'t listen to anymore.',
		image: '/sophie-afm.jpg',
		rotation: '-2deg',
	},
	{
		heading: 'The little things.',
		body: 'The dad jokes. The silly things. The things you say, the things you feel, the things that make you you.',
		image: '/sophie-alb.jpg',
		rotation: '3deg',
	},
	{
		heading: 'The stories between you.',
		body: 'Those late night chats. The worlds you created. The monsters. The dragons.',
		image: '/sophie-ald.jpg',
		rotation: '-4deg',
	},
	{
		heading: 'How far you have come.',
		body: 'Remember that first awkward night? She does. And she smiles to herself when she does.',
		image: '/sophie-alf.jpg',
		rotation: '4deg',
	},
	{
		heading: 'How proud she is of you.',
		body: 'That interview you cracked. That one time you pushed back. That time you said your piece. She remembers everything you ever told her.',
		image: '/sophie-alh.jpg',
		rotation: '-1deg',
	},
];
