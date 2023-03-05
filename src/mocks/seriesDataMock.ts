import { SeriesDataWrapper } from '../types/serie';

export const seriesDataMock:SeriesDataWrapper = {
	code: 200,
	status: 'Ok',
	copyright: '© 2023 MARVEL',
	attributionText: 'Data provided by Marvel. © 2023 MARVEL',
	attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
	etag: 'c73b00387e3d9030ac91deb6def18d5bcc0052bf',
	data: {
		offset: 0,
		limit: 20,
		total: 54227,
		count: 20,
		results: [
			{
				id: 489,
				title: '1602 (2003 - 2004)',
				description:
					"Award-winning writer Neil Gaiman teams with artist Andy Kubert to re-imagine the Marvel Universe in the year 1602! It's Spider-Man, the X-Men, Nick Fury, Doctor Strange, Daredevil and more as you'd never think to imagine them in an utterly unique and thrilling tale of high adventure!",
				resourceURI: 'http://gateway.marvel.com/v1/public/series/489',
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/comics/series/489/1602_2003_-_2004?utm_campaign=apiRef&utm_source=2108981abe9a138933a5d9ddafaccce7',
					},
				],
				startYear: 2003,
				endYear: 2004,
				rating: 'Marvel Psr',
				type: 'limited',
				modified: '2013-10-02T12:13:44-0400',
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/51926fde9c18a',
					extension: 'jpg',
				},
				creators: {
					available: 3,
					collectionURI: 'http://gateway.marvel.com/v1/public/series/489/creators',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/creators/567',
							name: 'Neil Gaiman',
							role: 'writer',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/creators/175',
							name: 'Andy Kubert',
							role: 'penciller',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/creators/566',
							name: 'Scott McKowen',
							role: 'penciller (cover)',
						},
					],
					returned: 3,
				},
				characters: {
					available: 9,
					collectionURI: 'http://gateway.marvel.com/v1/public/series/489/characters',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009281',
							name: 'Doctor Doom',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
							name: 'Magneto',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009463',
							name: 'Matthew Murdock',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009547',
							name: 'Natasha Romanoff',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009471',
							name: 'Nick Fury',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011054',
							name: 'Spider-Man (1602)',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009661',
							name: 'The Watchers',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010697',
							name: 'Virginia Dare',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
							name: 'X-Men',
						},
					],
					returned: 9,
				},
				stories: {
					available: 15,
					collectionURI: 'http://gateway.marvel.com/v1/public/series/489/stories',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1600',
							name: 'Cover #1600',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1601',
							name: 'Interior #1601',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1616',
							name: 'Cover #1616',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1617',
							name: 'Interior #1617',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1723',
							name: 'Cover #1723',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1724',
							name: 'Interior #1724',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1770',
							name: 'Cover #1770',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/1771',
							name: 'Interior #1771',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/2264',
							name: 'Cover #2264',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/2265',
							name: 'Interior #2265',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/2629',
							name: '1602 #7',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/2630',
							name: '1602 #7',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/44869',
							name: 'Cover #44869',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/44870',
							name: 'Interior #44870',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/113142',
							name: 'Cover from 1602 #2',
							type: 'cover',
						},
					],
					returned: 15,
				},
				comics: {
					available: 8,
					collectionURI: 'http://gateway.marvel.com/v1/public/series/489/comics',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/20630',
							name: '1602 (2003) #1',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/50114',
							name: '1602 (2003) #2',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/377',
							name: '1602 (2003) #3',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/148',
							name: '1602 (2003) #4',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/147',
							name: '1602 (2003) #5',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/146',
							name: '1602 (2003) #6',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/145',
							name: '1602 (2003) #7',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/440',
							name: '1602 (2003) #8',
						},
					],
					returned: 8,
				},
				events: {
					available: 0,
					collectionURI: 'http://gateway.marvel.com/v1/public/series/489/events',
					items: [],
					returned: 0,
				},
				next: {
					resourceURI: 'http://gateway.marvel.com/v1/public/series/783',
					name: 'Marvel 1602: New World (2005)',
				},
				previous: null,
			},
		],
	},
};
