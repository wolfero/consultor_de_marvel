import { SimpleGrid,  } from '@chakra-ui/react';
import useSection from '../../hooks/useSection';
import {CharacterCards} from '../Cards/Cards';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

const GrilleCharacters = () => {
	const { characters, error } = useSection();
	return (
		<>
			{error.code === 0 ? (
				characters != null ? (
					error.code === 0 ? (
						<SimpleGrid columns={4} spacing={4} justifyContent="center">
							{characters.data.results.map((character) => (
								<CharacterCards
									key={character.id}
									character={character}
								/>
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
