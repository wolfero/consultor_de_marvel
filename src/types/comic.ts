import { Url,ImageUrl, CharacterList, ComicSummary, CreatorList, EventList, SeriesSummary, StoryList } from "./global";

export interface ComicDataWrapper {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	data: ComicsDataContainer;
	etag: string;
}

export interface ComicsDataContainer {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results: Comic[];
}

export interface Comic {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: string;
	modified: string;
	isbn: string;
	upc: string;
	diamondCode: string;
	ean: string;
	issn: string;
	format: string;
	pageCount: number;
	textObjects: TextObject[];
	resourceURI: string;
	urls: Url[];
	series: SeriesSummary;
	variants: ComicSummary[];
	collections: ComicSummary[];
	collectedIssues: ComicSummary[];
	dates: ComicDate[];
	prices: ComicPrice[];
	thumbnail: ImageUrl;
	images: ImageUrl;
	creators: CreatorList;
	characters: CharacterList;
	stories: StoryList;
	events: EventList;
}

export interface TextObject {
	type: string;
	language: string;
	text: string;
}

export interface ComicDate {
	type: string;
	date: string;
}

export interface ComicPrice {
	type: string;
	price: number;
}
