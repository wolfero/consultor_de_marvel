import { SimpleGrid } from '@chakra-ui/react';
import useSection from '../../hooks/useSection';
import { CharacterCards } from '../Cards/Cards';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

const GrilleCharacters = () => {
	const { characters, error } = useSection();

	console.log(characters?.data.results);

	return (
		<>
			{error.code === 0 ? (
				characters != null ? (
					error.code === 0 ? (
						<SimpleGrid
							columns={{ base: 1, md: 2, lg:4 ,xl:5 }}
							spacing={4}
							justifyContent="center"
							justifyItems={'center'}
							padding={4}
						>
							{characters.data.results.map((character) => (
								<CharacterCards key={character.id} character={character} />
							))}
						</SimpleGrid>
					) : (
						<ErrorAlert message={characters.status} />
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

export default GrilleCharacters;
