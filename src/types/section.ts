import { CharacterDataWrapper } from './character';
import { ComicDataWrapper } from './comic';
import { SeriesDataWrapper } from './serie';

export interface SectionContextType {
	characters: CharacterDataWrapper | null;
	comics: ComicDataWrapper | null;
	series: SeriesDataWrapper | null;
	error: {
		code: number;
		message: string;
	};
}
