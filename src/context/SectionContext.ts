import { createContext } from 'react';
import { SectionContextType } from '../types/section';

const sectionData: SectionContextType = {
	characters: null,
	comics: null,
	series: null,
	error: { code: 0, message: '' },
};

const SectionContext = createContext(sectionData);

export default SectionContext;
