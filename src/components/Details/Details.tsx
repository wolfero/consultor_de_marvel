import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Text,
	Stack,
} from '@chakra-ui/react';
import { SeriesList } from '../../types/characters';
import { CharacterList, ComicsList, EventList, StoryList } from '../../types/global';

interface CharactersDetailsProps {
	title: string;
	elements: ComicsList | EventList | SeriesList | StoryList;
}

export const CharactersDetails = ({ title, elements }: CharactersDetailsProps) => {
	return (
		<AccordionItem>
			<AccordionButton>
				<Box as="span" flex="1" textAlign="left">
					<Heading color={'red.500'} textTransform="uppercase">
						{title}
					</Heading>
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4} bg={'red.500'}>
				<Stack pt={2} spacing="2">
					{elements.items.length === 0 ? (
						<Text size="xs" textTransform="uppercase">
							{title} not available
						</Text>
					) : (
						elements.items.map((element, index) => (
							<Text key={index} size="xs" textTransform="uppercase">
								{element.name}
							</Text>
						))
					)}
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
};

interface ComicsDetailsProps {
	title: string;
	elements: ComicsList | EventList | SeriesList | StoryList | CharacterList;
}

export const ComicsDetails = ({ title, elements }: ComicsDetailsProps) => {
	return (
		<AccordionItem>
			<AccordionButton>
				<Box as="span" flex="1" textAlign="left">
					<Heading color={'red.500'} textTransform="uppercase">
						{title}
					</Heading>
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4} bg={'red.500'}>
				<Stack pt={2} spacing="2">
					{elements.items.length === 0 ? (
						<Text size="xs" textTransform="uppercase">
							{title} not available
						</Text>
					) : (
						elements.items.map((element, index) => (
							<Text key={index} size="xs" textTransform="uppercase">
								{element.name}
							</Text>
						))
					)}
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
};

interface SeriesDetailsProps {
	title: string;
	elements: ComicsList | EventList | SeriesList | StoryList | CharacterList;
}

export const SeriesDetails = ({ title, elements }: SeriesDetailsProps) => {
	return (
		<AccordionItem>
			<AccordionButton>
				<Box as="span" flex="1" textAlign="left" textTransform="uppercase">
					<Heading color={'red.500'}>{title}</Heading>
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4} bg={'red.500'}>
				<Stack pt={2} spacing="2">
					{elements.items.length === 0 ? (
						<Text size="xs">{title} not available</Text>
					) : (
						elements.items.map((element, index) => (
							<Text key={index} size="xs">
								{element.name}
							</Text>
						))
					)}
				</Stack>
			</AccordionPanel>
		</AccordionItem>
	);
};
