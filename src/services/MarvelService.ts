import axios from 'axios';
import md5 from 'md5';
import { CharacterDataWrapper } from '../types/character';
import { ComicDataWrapper } from '../types/comic';
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
		const characterData: CharacterDataWrapper = response.data;
		return characterData;
	}
	async getComicsData() {
		const url = `${urlApi}comics?orderBy=title&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const comicData: ComicDataWrapper = response.data;
		return comicData;
	}
	async getSeriesData() {
		const url = `${urlApi}series?orderBy=title&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
		const response = await axios.get(url);
		const seriesData: SeriesDataWrapper = response.data;
		return seriesData;
	}
}

export const getCharactersData = async () => {
	return new MarvelService().getCharactersData();
};

export const getComicsData = async () => {
	return new MarvelService().getComicsData();
};

export const getSeriesData = async () => {
	return new MarvelService().getSeriesData();
};
