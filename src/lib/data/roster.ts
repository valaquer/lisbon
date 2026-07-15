export interface RosterGirl {
	name: string;
	age: number;
	hearts: string;
	chats: string;
	bg: string;
	img: string;
}

export const rosterGirls: RosterGirl[] = [
	// Row 1 (clipped top — real photos, only bottom 1/3 visible)
	{ name: 'Mira', age: 22, hearts: '10.3K', chats: '6.4M', bg: '#2D1F2E', img: '/nadia-afv.jpg' },
	{ name: 'Elara', age: 21, hearts: '12.4K', chats: '7.3M', bg: '#1F2D2E', img: '/nadia-afw.jpg' },
	{ name: 'Yuki', age: 23, hearts: '9.8K', chats: '5.9M', bg: '#2E2D1F', img: '/sara-aff.jpg' },
	{ name: 'Dani', age: 20, hearts: '11.1K', chats: '6.7M', bg: '#1F2E2A', img: '/jiwoo-adu.jpg' },
	// Row 2 (full — real girls)
	{ name: 'Valentina', age: 25, hearts: '9.8K', chats: '5.4M', bg: '#2E1F27', img: '/valentina-add.jpg' },
	{ name: 'Jiwoo', age: 21, hearts: '13.1K', chats: '8.2M', bg: '#2A1F2E', img: '/jiwoo-adq.jpg' },
	{ name: 'Avery', age: 32, hearts: '10.2K', chats: '6.7M', bg: '#1F2E1F', img: '/avery-adx.jpg' },
	{ name: 'Sophie', age: 27, hearts: '11.9K', chats: '7.1M', bg: '#2E261F', img: '/sophie-aeq.jpg' },
	// Row 3 (full — real girls)
	{ name: 'Sara', age: 23, hearts: '9.4K', chats: '5.6M', bg: '#2E2A1F', img: '/sara-afb.jpg' },
	{ name: 'Nadia', age: 29, hearts: '12.8K', chats: '7.9M', bg: '#1F272E', img: '/nadia-afr.jpg' },
	{ name: 'Hina', age: 20, hearts: '10.5K', chats: '6.3M', bg: '#2E1F1F', img: '/hina-age.jpg' },
	{ name: 'Adaeze', age: 26, hearts: '11.6K', chats: '7.4M', bg: '#1F2E28', img: '/adaeze-agw.jpg' },
	// Row 4 (clipped bottom — new girls, only top 1/3 visible)
	{ name: 'Lina', age: 22, hearts: '10.9K', chats: '6.5M', bg: '#2D2E1F', img: '/girl-ajt.jpg' },
	{ name: 'Reva', age: 21, hearts: '9.7K', chats: '5.9M', bg: '#1F2B2E', img: '/girl-akm.jpg' },
	{ name: 'Kaya', age: 23, hearts: '10.1K', chats: '6.2M', bg: '#2E1F25', img: '/girl-akt.jpg' },
	{ name: 'Zuri', age: 20, hearts: '11.2K', chats: '7.0M', bg: '#252E1F', img: '/girl-akz.jpg' },
];
