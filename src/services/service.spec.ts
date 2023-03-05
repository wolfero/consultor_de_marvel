import { characterDataMock } from '../mocks/characterDataMock';
import { comicDataMock } from '../mocks/comicDataMock';
import { seriesDataMock } from '../mocks/seriesDataMock';
import { CharacterDataWrapper } from '../types/character';
import { ComicDataWrapper } from '../types/comic';
import { SeriesDataWrapper } from '../types/serie';
import { Service } from './Service';

class StubMarvelService implements Service {
	getCharactersData() {
		return new Promise<CharacterDataWrapper>((resolve) => {
			resolve(characterDataMock);
		});
	}
	getComicsData() {
		return new Promise<ComicDataWrapper>((resolve) => {
			resolve(comicDataMock);
		});
	}
	getSeriesData() {
		return new Promise<SeriesDataWrapper>((resolve) => {
			resolve(seriesDataMock);
		});
	}
}

describe('Marvel service should', () => {
	it('return all characters', async () => {
		const marvelService = new StubMarvelService();

		const charactersResponse = await marvelService.getCharactersData();

		const characters = charactersResponse.data.results;
		const expectedCharactersLength = 1;
		expect(characters.length).toBe(expectedCharactersLength);
	});

	it('return all comics', async () => {
		const marvelService = new StubMarvelService();

		const comicsResponse = await marvelService.getComicsData();

		const comics=comicsResponse.data.results
		const expectedComicsLength = 1;
		expect(comics.length).toBe(expectedComicsLength);
	});

	it('return all series', async () => {
		const marvelService = new StubMarvelService();

		const seriesResponse = await marvelService.getSeriesData();

		const series=seriesResponse.data.results
		const expectedSeriesLength = 1;
		expect(series.length).toBe(expectedSeriesLength);
	});
});
