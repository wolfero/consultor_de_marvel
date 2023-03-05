import { createContext } from 'react';
import { ContextData } from '../types/section';

const SectionContext = createContext<ContextData>({
	data: {
		characters: null,
		comics: null,
		series: null,
		error: { code: 0, message: '' },
	},
	updateContextData: () => {},
});

export default SectionContext;
