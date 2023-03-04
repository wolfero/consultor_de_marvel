import { SimpleGrid } from '@chakra-ui/react';
import useSection from '../../hooks/useSection';
import { ComicsCards } from '../Cards/Cards';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

const GrilleComics = () => {
	const { comics, error } = useSection();
	return (
		<>
			{error.code === 0 ? (
				comics != null ? (
					error.code === 0 ? (
						<SimpleGrid
							columns={{ base: 1, md: 2, lg: 4 }}
							spacing={4}
							justifyContent="center"
							justifyItems={'center'}
							padding={4}
						>
							{comics.data.results.map((comic) => (
								<ComicsCards key={comic.id} comic={comic} />
							))}
						</SimpleGrid>
					) : (
						<ErrorAlert message={comics.status} />
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

export default GrilleComics;
