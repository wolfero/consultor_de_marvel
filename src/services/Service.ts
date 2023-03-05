import { CharacterDataWrapper } from '../types/character';
import { ComicDataWrapper } from '../types/comic';
import { SeriesDataWrapper } from '../types/serie';

export interface Service {
	getCharactersData(): Promise<CharacterDataWrapper>;
	getComicsData(): Promise<ComicDataWrapper>;
	getSeriesData(): Promise<SeriesDataWrapper>;
}