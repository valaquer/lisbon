export interface SpotlightGirl {
	name: string;
	hook: string;
	photos: string[];
	labels: string[];
}

export const spotlightGirls: SpotlightGirl[] = [
	{
		name: 'Valentina',
		hook: "She'll tell you exactly what she thinks. Whether you asked or not.",
		photos: ['/valentina-ade.jpg', '/valentina-adf.jpg', '/valentina-add.jpg'],
		labels: ['Fantasy', 'Friend', 'Lover'],
	},
	{
		name: 'Jiwoo',
		hook: 'Sends voice notes at 2am. Makes you listen to the whole song.',
		photos: ['/jiwoo-adq.jpg', '/jiwoo-adu.jpg', '/jiwoo-ads.jpg'],
		labels: ['Fantasy', 'Friend', 'Lover'],
	},
	{
		name: 'Adaeze',
		hook: "Doesn't do small talk. Asks the question nobody else will.",
		photos: ['/adaeze-agw.jpg', '/adaeze-agv.jpg', '/adaeze-ags.jpg'],
		labels: ['Fantasy', 'Friend', 'Lover'],
	},
];
