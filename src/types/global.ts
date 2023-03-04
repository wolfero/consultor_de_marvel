export interface ImageUrl {
	path: string;
	extension: string;
}

export interface Url {
	type: string;
	url: string;
}

export interface CharacterList {
	available: number;
	returned: number;
	collectionURI: string;
	items: CharacterSummary[];
}

export interface CharacterSummary {
	resourceURI: string;
	name: string;
	role: string;
}

export interface ComicsList {
	available: number;
	returned: number;
	collectionURI: string;
	items: ComicSummary[];
}

export interface ComicSummary {
	resourceURI: string;
	name: string;
}

export interface CreatorList {
	available: number;
	returned: number;
	collectionURI: string;
	items: CreatorSummary[];
}

export interface CreatorSummary {
	resourceURI: string;
	name: string;
	role: string;
}

export interface SeriesSummary {
	resourceURI: string;
	name: string;
}

export interface StoryList {
	available: number;
	returned: number;
	collectionURI: string;
	items: StorySummary[];
}

export interface StorySummary {
	resourceURI: string;
	name: string;
	type: string;
}

export interface EventList {
	available: number;
	returned: number;
	collectionURI: string;
	items: EventSummary[];
}

export interface EventSummary {
	resourceURI: string;
	name: string;
}
