import { Url, ImageUrl, ComicsList, EventList, SeriesSummary, StoryList } from './global';

export interface CharactersDataWrapper {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	data: CharactersDataContainer;
	etag: string;
}

export interface CharactersDataContainer {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: Character[];
}

export interface Character {
	id: number;
	name: string;
	description: string;
	modified: string;
	resourceURI: string;
	urls: Url[];
	thumbnail: ImageUrl;
	comics: ComicsList;
	stories: StoryList;
	events: EventList;
	series: SeriesList;
}

export interface SeriesList {
	available: number;
	returned: number;
	collectionURI: string;
	items: SeriesSummary[];
}
