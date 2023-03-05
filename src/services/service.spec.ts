import { charactersDataMock } from '../mocks/charactersDataMock';
import { comicsDataMock } from '../mocks/comicsDataMock';
import { seriesDataMock } from '../mocks/seriesDataMock';
import { CharactersDataWrapper } from '../types/characters';
import { ComicsDataWrapper } from '../types/comics';
import { SeriesDataWrapper } from '../types/serie';
import { Service } from './Service';

class StubMarvelService implements Service {
	getNextCharactersData(number: number): Promise<CharactersDataWrapper> {
		return new Promise<CharactersDataWrapper>((resolve) => {
			resolve(charactersDataMock);
		});
	}
	getCharactersData() {
		return new Promise<CharactersDataWrapper>((resolve) => {
			resolve(charactersDataMock);
		});
	}
	getComicsData() {
		return new Promise<ComicsDataWrapper>((resolve) => {
			resolve(comicsDataMock);
		});
	}
	getNextComicsData(number: number): Promise<ComicsDataWrapper> {
		return new Promise<ComicsDataWrapper>((resolve) => {
			resolve(comicsDataMock);
		});
	}
	getSeriesData() {
		return new Promise<SeriesDataWrapper>((resolve) => {
			resolve(seriesDataMock);
		});
	}
	getNextSeriesData(number: number): Promise<SeriesDataWrapper> {
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

		const comics = comicsResponse.data.results;
		const expectedComicsLength = 1;
		expect(comics.length).toBe(expectedComicsLength);
	});

	it('return all series', async () => {
		const marvelService = new StubMarvelService();

		const seriesResponse = await marvelService.getSeriesData();

		const series = seriesResponse.data.results;
		const expectedSeriesLength = 1;
		expect(series.length).toBe(expectedSeriesLength);
	});
});
