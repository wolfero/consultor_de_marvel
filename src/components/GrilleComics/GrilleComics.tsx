import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSection from '../../hooks/useSection';
import { MarvelService } from '../../services/MarvelService';
import { ComicsDataWrapper, ComicsDataContainer } from '../../types/comics';
import { SectionContextType } from '../../types/section';
import { ComicsCards } from '../Cards/Cards';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

import styles from '../../styles/global.module.scss';

const GrilleComics = () => {
	const { data, updateContextData } = useSection();
	const [comicsData, setComicsData] = useState<ComicsDataContainer | null>(null);
	const [pageCount, setPageCount] = useState(0);
	const numberOfComicsInPage = 20;

	const handleClick = async (newPageCount: number) => {
		const marvelService = new MarvelService();
		const newComics = await marvelService.getNextComicsData(newPageCount);
		const aux = updateData(newComics);
		updateContextData(aux);
	};

	const updateData = (newComics: ComicsDataWrapper): SectionContextType => {
		return {
			characters: data.characters,
			comics: newComics,
			series: data.series,
			error: data.error,
		};
	};

	useEffect(() => {
		if (data.comics) {
			setComicsData(data.comics.data);
			setPageCount(data.comics.data.offset);
		}
	});

	return (
		<Box minHeight={'90vh'}>
			{data.error.code === 0 ? (
				data.comics && comicsData != null ? (
					data.error.code === 0 ? (
						<>
							<SimpleGrid
								columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
								spacing={4}
								justifyContent="center"
								justifyItems={'center'}
								padding={4}
							>
								{data.comics.data.results.map((comic) => (
									<ComicsCards key={comic.id} comic={comic} />
								))}
							</SimpleGrid>
							<Flex className={styles.paginationButtons}>
								{comicsData.offset >= 20 ? (
									<Box
										fontSize={'3xl'}
										onClick={async () =>
											await handleClick(pageCount - numberOfComicsInPage)
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
										await handleClick(pageCount + numberOfComicsInPage)
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
						<ErrorAlert message={data.comics.status} />
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

export default GrilleComics;
