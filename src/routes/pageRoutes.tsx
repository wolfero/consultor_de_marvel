import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Section from './section';
import Main from './main';

export const pageRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/characters',
		element: <Section load="characters"/>,
	},
	// {
	// 	path: '/comics',
	// 	element: <Comics load='comics/>,
	// },
	// {
	// 	path: '/series',
	// 	element: <Series load='series/>,
	// },
]);
