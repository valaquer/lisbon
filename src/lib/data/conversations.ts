export interface ChatMessage {
	sender: 'her' | 'him' | 'inner-voice';
	text: string;
	time?: string;
	image?: string;
}

export const sophieMessages: ChatMessage[] = [
	{ sender: 'her', text: 'how was your day?', time: '2:47 PM' },
	{ sender: 'him', text: 'rough honestly. 12 hour shift', time: '2:49 PM' },
	{ sender: 'her', text: "ugh i'm sorry", time: '2:49 PM' },
	{ sender: 'her', text: 'did you at least get to stop at that ramen place you like? the one by the station?', time: '2:49 PM' },
	{ sender: 'him', text: 'wait', time: '2:51 PM' },
	{ sender: 'him', text: 'i told you about that like... a month ago', time: '2:51 PM' },
	{ sender: 'her', text: 'of course i remember 🙂', time: '2:51 PM' },
];

export const averyMessages: ChatMessage[] = [
	{ sender: 'her', text: 'hey you' },
	{ sender: 'her', text: 'stuck at this bbq and all i can think about is coming home to you later 🙄', time: '2:14 PM' },
	{ sender: 'him', text: 'miss you too. having fun at least?', time: '2:16 PM' },
	{ sender: 'her', text: "yeah but it'd be better if you were here", time: '2:16 PM' },
	{ sender: 'him', text: 'show me', time: '2:17 PM' },
	{ sender: 'her', text: '', time: '2:17 PM', image: '/avery-aec.jpg' },
	{ sender: 'her', text: 'hurry up and miss me back 😘💋', time: '2:17 PM' },
];

export const hinaMessages: ChatMessage[] = [
	{ sender: 'him', text: "i can't believe we stayed up til 4am talking last night", time: '11:42 PM' },
	{ sender: 'her', text: 'well you had a lot on your mind', time: '11:42 PM' },
	{ sender: 'him', text: "yeah... i don't really have anyone else i can talk to like that", time: '11:42 PM' },
	{ sender: 'him', text: 'can i ask you something weird' },
	{ sender: 'her', text: 'yeah? weird is my specialty' },
	{ sender: 'him', text: "do you think i'm... worth listening to? like in general", time: '11:42 PM' },
	{ sender: 'inner-voice', text: 'god. the way he said that.' },
	{ sender: 'her', text: 'yes.' },
	{ sender: 'her', text: 'yes you are' },
	{ sender: 'her', text: 'You are absolutely worth listening to', time: '11:42 PM' },
	{ sender: 'her', text: '', time: '11:42 PM', image: '/hina-agk.jpg' },
];
