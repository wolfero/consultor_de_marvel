import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSection from '../../hooks/useSection';
import { MarvelService } from '../../services/MarvelService';
import { CharactersDataContainer, CharactersDataWrapper } from '../../types/characters';
import { SectionContextType } from '../../types/section';
import { CharacterCards } from '../Cards/Cards';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

import styles from '../../styles/global.module.scss';

const GrilleCharacters = () => {
	const { data, updateContextData } = useSection();
	const [pageCount, setPageCount] = useState(0);
	const numberOfCharactersInPage = 20;
	const [charactersData, setCharactersData] = useState<CharactersDataContainer | null>(null);

	const handleClick = async (newPageCount: number) => {
		const marvelService = new MarvelService();
		const newCharacters = await marvelService.getNextCharactersData(newPageCount);
		const aux = updateData(newCharacters);
		updateContextData(aux);
	};

	const updateData = (newCharacters: CharactersDataWrapper): SectionContextType => {
		return {
			characters: newCharacters,
			comics: data.comics,
			series: data.series,
			error: data.error,
		};
	};

	useEffect(() => {
		if (data.characters) {
			setCharactersData(data.characters.data);
			setPageCount(data.characters.data.offset);
		}
	});

	return (
		<Box minHeight={'90vh'}>
			{data.error.code === 0 ? (
				data.characters && charactersData ? (
					data.error.code === 0 ? (
						<>
							<SimpleGrid
								columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
								spacing={4}
								justifyContent="center"
								justifyItems={'center'}
								padding={4}
							>
								{data.characters.data.results.map((character) => (
									<CharacterCards key={character.id} character={character} />
								))}
							</SimpleGrid>
							<Flex className={styles.paginationButtons}>
								{charactersData.offset >= 20 ? (
									<Box
										fontSize={'3xl'}
										onClick={async () =>
											await handleClick(pageCount - numberOfCharactersInPage)
										}
									>
										<Flex className={styles.button}>
											<ArrowLeftIcon alignSelf={'center'} />
											Previous
										</Flex>
									</Box>
								) : null}
								<Box
									fontSize={'3xl'}
									onClick={async () =>
										await handleClick(pageCount + numberOfCharactersInPage)
									}
								>
									<Flex className={styles.button}>
										Next
										<ArrowRightIcon alignSelf={'center'} />
									</Flex>
								</Box>
							</Flex>
						</>
					) : (
						<ErrorAlert message={data.characters.status} />
					)
				) : (
					<Spinner />
				)
			) : (
				<ErrorAlert message={data.error.message} />
			)}
		</Box>
	);
};

export default GrilleCharacters;
