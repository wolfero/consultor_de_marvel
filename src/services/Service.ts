import { CharactersDataWrapper } from '../types/characters';
import { ComicsDataWrapper } from '../types/comics';
import { SeriesDataWrapper } from '../types/serie';

export interface Service {
	getCharactersData(): Promise<CharactersDataWrapper>;
	getNextCharactersData(number:number): Promise<CharactersDataWrapper>;
	getComicsData(): Promise<ComicsDataWrapper>;
	getNextComicsData(number:number): Promise<ComicsDataWrapper>;
	getSeriesData(): Promise<SeriesDataWrapper>;
	getNextSeriesData(number:number): Promise<SeriesDataWrapper>;
}
