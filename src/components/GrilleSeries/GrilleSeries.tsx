import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection';
import { MarvelService } from '../../services/MarvelService';
import { SectionContextType } from '../../types/section';
import { SeriesDataContainer, SeriesDataWrapper } from '../../types/serie';
import { SeriesCards } from '../Cards/Cards';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

import styles from '../../styles/global.module.scss';

const GrilleSeries = () => {
	const { data, updateContextData } = useSection();
	const [seriesData, setSeriesData] = useState<SeriesDataContainer | null>(null);
	const [pageCount, setPageCount] = useState(0);
	const numberOfSeriesInPage = 20;

	const handleClick = async (newPageCount: number) => {
		const marvelService = new MarvelService();
		const newSeries = await marvelService.getNextSeriesData(newPageCount);
		const aux = updateData(newSeries);
		updateContextData(aux);
	};

	const updateData = (newSeries: SeriesDataWrapper): SectionContextType => {
		return {
			characters: data.characters,
			comics: data.comics,
			series: newSeries,
			error: data.error,
		};
	};

	useEffect(() => {
		if (data.series) {
			setSeriesData(data.series.data);
			setPageCount(data.series.data.offset);
		}
	});

	return (
		<Box minHeight={'90vh'}>
			{data.error.code === 0 ? (
				data.series && seriesData != null ? (
					data.error.code === 0 ? (
						<>
							<SimpleGrid
								columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
								spacing={4}
								justifyContent="center"
								justifyItems={'center'}
								padding={4}
							>
								{data.series.data.results.map((serie) => (
									<SeriesCards key={serie.id} serie={serie} />
								))}
							</SimpleGrid>
							<Flex className={styles.paginationButtons}>
								{seriesData.offset >= 20 ? (
									<Box
										fontSize={'3xl'}
										onClick={async () =>
											await handleClick(pageCount - numberOfSeriesInPage)
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
										await handleClick(pageCount + numberOfSeriesInPage)
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
						<ErrorAlert message={data.series.status} />
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

export default GrilleSeries;
