import { Routes, Route } from 'react-router-dom';
import GrilleCharacters from '../components/GrilleCharacters/GrilleCharacters';
import GrilleComics from '../components/GrilleComics/GrilleComics';
import GrilleSeries from '../components/GrilleSeries/GrilleSeries';
import Main from '../components/Main/Main';

function MyRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/characters" element={<GrilleCharacters />} />
			<Route path="/comics" element={<GrilleComics />} />
			<Route path="/series" element={<GrilleSeries />} />
		</Routes>
	);
}

export default MyRoutes;
