import { CharactersDataWrapper } from './characters';
import { ComicsDataWrapper } from './comics';
import { SeriesDataWrapper } from './serie';

export interface SectionContextType {
	characters: CharactersDataWrapper | null;
	comics: ComicsDataWrapper | null;
	series: SeriesDataWrapper | null;
	error: {
		code: number;
		message: string;
	};
}

export interface ContextData {
	data: SectionContextType;
	updateContextData: (newData: SectionContextType) => void;
}
