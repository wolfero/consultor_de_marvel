import axios from 'axios';
import md5 from 'md5';
import { CharactersDataWrapper } from '../types/characters';
import { ComicsDataWrapper } from '../types/comics';
import { SeriesDataWrapper } from '../types/serie';
import { Service } from './Service';

const apiPublicKey = process.env.REACT_APP_PUBLIC_KEY;
const apiPrivateKey = process.env.REACT_APP_PRIVATE_KEY;
const ts = Number(new Date());
const hash = md5(`${ts}${apiPrivateKey}${apiPublicKey}`);
const urlApi = 'http://gateway.marvel.com/v1/public/';

export class MarvelService implements Service {
	async getCharactersData() {
		const url = `${urlApi}characters?orderBy=name&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const charactersData: CharactersDataWrapper = response.data;
		return charactersData;
	}

	async getNextCharactersData(number: number) {
		const url = `${urlApi}characters?orderBy=name&offset=${number}&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const charactersData: CharactersDataWrapper = response.data;
		return charactersData;
	}

	async getComicsData() {
		const url = `${urlApi}comics?orderBy=title&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const comicsData: ComicsDataWrapper = response.data;
		return comicsData;
	}

	async getNextComicsData(number: number): Promise<ComicsDataWrapper> {
		const url = `${urlApi}comics?orderBy=title&offset=${number}&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const comicsData: ComicsDataWrapper = response.data;
		return comicsData;
	}

	async getSeriesData() {
		const url = `${urlApi}series?orderBy=title&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const seriesData: SeriesDataWrapper = response.data;
		return seriesData;
	}

	async getNextSeriesData(number: number): Promise<SeriesDataWrapper> {
		const url = `${urlApi}series?orderBy=title&offset=${number}&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const seriesData: SeriesDataWrapper = response.data;
		return seriesData;
	}
}