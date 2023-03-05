import SectionContext from './context/SectionContext';
import { useState, useEffect } from 'react';
import { SectionContextType } from './types/section';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MyRoutes from './routes/MyRoutes';
import { MarvelService } from './services/MarvelService';

function App() {
	const [data, setData] = useState<SectionContextType>({
		characters: null,
		comics: null,
		series: null,
		error: { code: 0, message: '' },
	});

	function updateContextData(newData: SectionContextType) {
		setData(newData);
	}

	const loadData = async () => {
		const marvelService = new MarvelService();
		const characters = await marvelService.getCharactersData();
		const comics = await marvelService.getComicsData();
		const series = await marvelService.getSeriesData();
		return {
			characters: characters,
			comics: comics,
			series: series,
			error: { code: 0, message: '' },
		};
	};

	useEffect(() => {
		loadData()
			.then((response) => setData(response))
			.catch((error) => {
				const failedResponse = {
					characters: null,
					comics: null,
					series: null,
					error: { code: error.code, message: error.message },
				};
				setData(failedResponse);
			});
	}, []);

	return (
		<SectionContext.Provider value={{ data, updateContextData }}>
			<>
				<header>
					<Navbar />
				</header>
				<MyRoutes />
				<footer>
					<Footer />
				</footer>
			</>
		</SectionContext.Provider>
	);
}

export default App;
