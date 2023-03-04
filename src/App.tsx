import { RouterProvider } from 'react-router-dom';
import SectionContext from './context/SectionContext';
import { useState, useEffect } from 'react';
import { pageRoutes } from './routes/pageRoutes';
import { getCharactersData, getComicsData, getSeriesData } from './services/Service';
import { SectionContextType } from './types/section';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	const [data, setData] = useState<SectionContextType>({
		characters: null,
		comics: null,
		series: null,
		error: { code: 0, message: '' },
	});

	const loadData = async () => {
		const characters = await getCharactersData();
		const comics = await getComicsData();
		const series = await getSeriesData();
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
		<SectionContext.Provider value={data}>
		<>
			<header>
				<Navbar />
			</header>
			<RouterProvider router={pageRoutes} />
			<footer>
				<Footer />
			</footer>
		</>
		</SectionContext.Provider>
	);
}

export default App;
