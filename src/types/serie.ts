import { Url,ImageUrl, CharacterList, CreatorList, EventList, SeriesSummary, StoryList, ComicsList } from "./global";

export interface SeriesDataWrapper {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	data: SeriesDataContainer;
	etag: string;
}

export interface SeriesDataContainer {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: Series[];
}

export interface Series {
	id: number;
	title: string;
	description: string;
	resourceURI: string;
	urls: Url;
	startYear: number;
	endYear: number;
	rating: string;
	modified: Date;
	thumbnail: ImageUrl;
	comics: ComicsList;
	stories: StoryList;
	events: EventList;
	characters: CharacterList;
	creators: CreatorList;
	next: SeriesSummary;
	previous: SeriesSummary;
}



