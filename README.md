# Content index

-   [Getting Started](#getting-started)
    -   [Pre-requisites](#pre-requisites-%EF%B8%8F)
    -   [Installation](#installation-)
    -   [Running the project](#running-the-project-)
-   [Abstract](#abstract)
-   [Acceptance Criteria](#acceptance-criteria)
-   [Optional Criteria](#optional-criteria)
-   [Used packages](#used-packages)
-   [End-to-End flow](#end-to-end-flow)
-   [Data structures](#data-structures)
    -   [Characters structure](#characters-structure)
    -   [Comics structure](#comics-structure)
    -   [Series structure](#series-structure)

# Getting Started

-   ## Pre-requisites ✔️

    It's necessary to create an .env file and add the API KEYS in the following format:

    `REACT_APP_PUBLIC_KEY = HERE YOUR PUBLIC API KEY`
    `REACT_APP_PRIVATE_KEY = HERE YOUR PRIVATE API KEY`

-   ## Installation 🛠

    `npm install`

-   ## Running the project ✈

    `npm run start` [http://localhost:3000](http://localhost:3000) to view it in the browser.

    `npm run test` [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

# Abstract

An application of react on Marvel consultant, where we can find the details of the characters, comics and series.

# Acceptance Criteria

1. Create a single page application with the following sections:
    - Characters
    - Comics
    - Series
2. When accessing each section, should be displayed a grid of cards (image, name and description) and clicking on them, will take you to the details of the card.
3. Establish connection with the API.
4. Make use of the Context.

# Optional criteria

1. Use HOOKS.
2. Responsive design.
3. Using css preprocessor with SASS.
4. Testing
5. API request filters.
6. Pagination in API requests

# Used packages

-   [axios](https://axios-http.com/es/)
-   [md5](https://www.npmjs.com/package/md5)
-   [sass](https://sass-lang.com/)
-   [chakra-UI](https://chakra-ui.com/)
-   [chakra icons](https://chakra-ui.com/docs/components/icon/usage)
-   [reactrouter](https://reactrouter.com/en/main)
-   [jest](https://jestjs.io/es-ES/)

# End-to-End flow

# Data structures

## Characters structure

```
{
	code: 200,
	status: 'Ok',
	copyright: '© 2023 MARVEL',
	attributionText: 'Data provided by Marvel. © 2023 MARVEL',
	attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
	etag: '33dec0ec3854f5d5ba3b71327d52a6c1266322ae',
	data: {
		offset: 0,
		limit: 20,
		total: 1562,
		count: 20,
		results: [
			{
				id: 1017100,
				name: 'A-Bomb (HAS)',
				description:
					"Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
				modified: '2013-09-18T15:54:04-0400',
				thumbnail: {
					path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
					extension: 'jpg',
				},
				resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
				comics: {
					available: 4,
					collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/comics',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/47176',
							name: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/40632',
							name: 'Hulk (2008) #53',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/40630',
							name: 'Hulk (2008) #54',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/comics/40628',
							name: 'Hulk (2008) #55',
						},
					],
					returned: 4,
				},
				series: {
					available: 2,
					collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/series',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/series/17765',
							name: 'FREE COMIC BOOK DAY 2013 1 (2013)',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/series/3374',
							name: 'Hulk (2008 - 2012)',
						},
					],
					returned: 2,
				},
				stories: {
					available: 7,
					collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/stories',
					items: [
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/92078',
							name: 'Hulk (2008) #55',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/92079',
							name: 'Interior #92079',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/92082',
							name: 'Hulk (2008) #54',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/92083',
							name: 'Interior #92083',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/92086',
							name: 'Hulk (2008) #53',
							type: 'cover',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/92087',
							name: 'Interior #92087',
							type: 'interiorStory',
						},
						{
							resourceURI: 'http://gateway.marvel.com/v1/public/stories/105929',
							name: 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1',
							type: 'cover',
						},
					],
					returned: 7,
				},
				events: {
					available: 0,
					collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/events',
					items: [],
					returned: 0,
				},
				urls: [
					{
						type: 'detail',
						url: 'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=2108981abe9a138933a5d9ddafaccce7',
					},
					{
						type: 'comiclink',
						url: 'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=2108981abe9a138933a5d9ddafaccce7',
					},
				],
			},
		],
	},
}
```

## Comics structure

```
{
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
}
```

## Series structure

```
{
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
}
```
