import axios from 'axios';
import md5 from 'md5';
import { CharacterDataWrapper } from '../types/character';
import { ComicDataWrapper } from '../types/comic';
import { SeriesDataWrapper } from '../types/serie';

const apiPublicKey = process.env.REACT_APP_PUBLIC_KEY;
const apiPrivateKey = process.env.REACT_APP_PRIVATE_KEY;
const ts = Number(new Date());
const hash = md5(`${ts}${apiPrivateKey}${apiPublicKey}`);
const urlApi = 'http://gateway.marvel.com/v1/public/';

export const getCharactersData = async () => {
	const url = `${urlApi}characters?orderBy=name&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
	const response = await axios.get(url);
	const characterData: CharacterDataWrapper = response.data;
	return characterData;
};

export const getComicsData = async () => {
	const url = `${urlApi}comics?orderBy=title&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
	const response = await axios.get(url);
	const comicData: ComicDataWrapper = response.data;
	return comicData;
};

export const getSeriesData = async () => {
	const url = `${urlApi}series?orderBy=title&ts=${ts}&apikey=${apiPublicKey}&hash=${hash}`;
	const response = await axios.get(url);
	const seriesData: SeriesDataWrapper = response.data;
	return seriesData;
};
