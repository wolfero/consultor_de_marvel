import { ComicsDataWrapper } from '../types/comics';

export const comicsDataMock: ComicsDataWrapper = {
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
				id: 49010,
				digitalId: 34127,
				title: '100th Anniversary Special (2014) #1',
				issueNumber: 1,
				variantDescription: '',
				description:
					"CELEBRATE 100 YEARS OF EARTHS MIGHTIEST HEROES...THE AVENGERS! Following the failed Badoon invasion of Earth and America's disappearance into the Negative Zone, how will the Avengers of 2061 cope?!",
				modified: '2014-07-16T13:13:34-0400',
				isbn: '',
				upc: '75960608000700411',
				diamondCode: '',
				ean: '',
				issn: '',
				format: 'Comic',
				pageCount: 32,
				textObjects: [
					{
						type: 'issue_solicit_text',
						language: 'en-us',
						text: 'CELEBRATE 100 YEARS OF EARTH&#39;S MIGHTIEST HEROES &ndash; THE AVENGERS! Following the failed Badoon invasion of Earth and America&#39;s disappearance into the Negative Zone, how will the Avengers of 2061 cope?!',
					},
				],
				resourceURI: 'http://gateway.marvel.com/v1/public/comics/49010',
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/comics/issue/49010/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=2108981abe9a138933a5d9ddafaccce7',
					},
					{
						type: 'purchase',
						url: 'http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34127?utm_campaign=apiRef&utm_source=2108981abe9a138933a5d9ddafaccce7',
					},
					{
						type: 'reader',
						url: 'http://marvel.com/digitalcomics/view.htm?iid=34127&utm_campaign=apiRef&utm_source=2108981abe9a138933a5d9ddafaccce7',
					},
					{
						type: 'inAppLink',
						url: 'https://applink.marvel.com/issue/34127?utm_campaign=apiRef&utm_source=2108981abe9a138933a5d9ddafaccce7',
					},
				],
				series: {
					resourceURI: 'http://gateway.marvel.com/v1/public/series/18454',
					name: '100th Anniversary Special (2014)',
				},
				variants: [
					{
						resourceURI: 'http://gateway.marvel.com/v1/public/comics/49011',
						name: '100th Anniversary Special (2014) #1',
					},
					{
						resourceURI: 'http://gateway.marvel.com/v1/public/comics/49009',
						name: '100th Anniversary Special (2014) #1',
					},
					{
						resourceURI: 'http://gateway.marvel.com/v1/public/comics/49008',
						name: '100th Anniversary Special (2014) #1',
					},
					{
						resourceURI: 'http://gateway.marvel.com/v1/public/comics/49007',
						name: '100th Anniversary Special (2014) #1',
					},
				],
				collections: [],
				collectedIssues: [],
				dates: [
					{
						type: 'onsaleDate',
						date: '2014-07-23T00:00:00-0400',
					},
					{
						type: 'focDate',
						date: '2014-07-09T00:00:00-0400',
					},
					{
						type: 'unlimitedDate',
						date: '2015-01-19T00:00:00-0500',
					},
					{
						type: 'digitalPurchaseDate',
						date: '2014-07-23T00:00:00-0400',
					},
				],
				prices: [
					{
						type: 'printPrice',
						price: 3.99,
					},
					{
						type: 'digitalPurchasePrice',
						price: 3.99,
					},
				],
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c',
					extension: 'jpg',
				},
				images: [
					{
						path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c',
						extension: 'jpg',
					},
					{
						path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/40/536cffe2a8b13',
						extension: 'jpg',
					},
				],
				creators: {
					available: 0,
					collectionURI: 'http://gateway.marvel.com/v1/public/comics/49010/creators',
					items: [],
					returned: 0,
				},
				characters: {
					available: 0,
					collectionURI: 'http://gateway.marvel.com/v1/public/comics/49010/characters',
					items: [],
					returned: 0,
				},
				stories: {
					available: 2,
					collectionURI: 'http://gateway.marvel.com/v1/public/comics/49010/stories',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/110107',
							name: 'cover from 100th Anniversary Special (2014) #4',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/110108',
							name: 'story from 100th Anniversary Special (2014) #4',
							type: 'interiorStory',
						},
					],
					returned: 2,
				},
				events: {
					available: 0,
					collectionURI: 'http://gateway.marvel.com/v1/public/comics/49010/events',
					items: [],
					returned: 0,
				},
			},
		],
	},
};
