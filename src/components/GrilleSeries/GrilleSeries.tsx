import { SimpleGrid } from '@chakra-ui/react';
import useSection from '../../hooks/useSection';
import { SeriesCards } from '../Cards/Cards';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

const GrilleSeries = () => {
	const { series, error } = useSection();
	return (
		<>
			{error.code === 0 ? (
				series != null ? (
					error.code === 0 ? (
						<SimpleGrid
							columns={{ base: 1, md: 2, lg: 4 }}
							spacing={4}
							justifyContent="center"
							justifyItems={'center'}
							padding={4}
						>
							{series.data.results.map((serie) => (
								<SeriesCards key={serie.id} serie={serie} />
							))}
						</SimpleGrid>
					) : (
						<ErrorAlert message={series.status} />
					)
				) : (
					<Spinner />
				)
			) : (
				<ErrorAlert message={error.message} />
			)}
		</>
	);
};

export default GrilleSeries;
