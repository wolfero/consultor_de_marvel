import {
	Button,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Card,
	Text,
	useDisclosure,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Box,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Flex,
} from '@chakra-ui/react';
import { Character } from '../../types/characters';
import { Comic } from '../../types/comics';
import { Series } from '../../types/serie';
import { CharactersDetails, ComicsDetails, SeriesDetails } from '../Details/Details';

interface CardProps {
	character: Character;
}

export const CharacterCards = ({ character }: CardProps) => {
	const { name, description, thumbnail, comics, events, series, stories } = character;
	const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Card maxW="sm" bg={'green.700'}>
			<CardBody>
				<Image src={imageUrl} alt={name} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{name}</Heading>
					<Text>{!description ? 'Description not available' : description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				<Button variant="solid" bg="red.600" _hover={{ bg: 'blue.500' }} onClick={onOpen}>
					Details
				</Button>

				<Modal
					size={'5xl'}
					isCentered
					scrollBehavior={'inside'}
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>
							{name}
							<ModalCloseButton />
						</ModalHeader>

						<ModalBody>
							<Flex gap={8} py={4}>
								<Image
									boxSize="md"
									objectFit="contain"
									src={imageUrl}
									alt={name}
									borderRadius="lg"
								/>
								<Accordion allowMultiple flex="1">
									<AccordionItem>
										<AccordionButton>
											<Box as="span" flex="1" textAlign="left">
												<Heading
													color={'red.500'}
													textTransform="uppercase"
												>
													Description
												</Heading>
											</Box>
											<AccordionIcon />
										</AccordionButton>
										<AccordionPanel bg={'red.500'}>
											<Text textTransform="uppercase">
												{!description
													? 'Description not available'
													: description}
											</Text>
										</AccordionPanel>
									</AccordionItem>
									<CharactersDetails title={'comics'} elements={comics} />
									<CharactersDetails title={'events'} elements={events} />
									<CharactersDetails title={'series'} elements={series} />
									<CharactersDetails title={'stories'} elements={stories} />
								</Accordion>
							</Flex>
						</ModalBody>
					</ModalContent>
				</Modal>
			</CardFooter>
		</Card>
	);
};

interface ComicProps {
	comic: Comic;
}

export const ComicsCards = ({ comic }: ComicProps) => {
	const {
		title,
		description,
		thumbnail,
		characters,
		creators,
		events,
		pageCount,
		prices,
		stories,
	} = comic;
	const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Card maxW="sm">
			<CardBody>
				<Image src={imageUrl} alt={title} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text>{!description ? 'Description not available' : description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				<Button variant="solid" bg="red.600" _hover={{ bg: 'blue.500' }} onClick={onOpen}>
					Details
				</Button>

				<Modal
					size={'5xl'}
					isCentered
					scrollBehavior={'inside'}
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{title}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Flex justifyContent={'space-around'}>
								<Heading color={'red.500'} textTransform="uppercase">
									Price: ${prices[0].price}
								</Heading>
								<Heading color={'red.500'} textTransform="uppercase">
									Nº Pages : {pageCount}
								</Heading>
							</Flex>
							<Flex gap={8} py={4}>
								<Image
									boxSize="md"
									objectFit="contain"
									src={imageUrl}
									alt={title}
									borderRadius="lg"
								/>
								<Accordion allowMultiple flex="1">
									<AccordionItem>
										<AccordionButton>
											<Box as="span" flex="1" textAlign="left">
												<Heading
													color={'red.500'}
													textTransform="uppercase"
												>
													Description
												</Heading>
											</Box>
											<AccordionIcon />
										</AccordionButton>
										<AccordionPanel bg={'red.500'}>
											<Text textTransform="uppercase">
												{!description
													? 'Description not available'
													: description}
											</Text>
										</AccordionPanel>
									</AccordionItem>
									<ComicsDetails title={'characters'} elements={characters} />
									<ComicsDetails title={'events'} elements={events} />
									<ComicsDetails title={'stories'} elements={stories} />
									<ComicsDetails title={'creators'} elements={creators} />
								</Accordion>
							</Flex>
						</ModalBody>
					</ModalContent>
				</Modal>
			</CardFooter>
		</Card>
	);
};

interface SeriesProps {
	serie: Series;
}

export const SeriesCards = ({ serie }: SeriesProps) => {
	const {
		title,
		description,
		thumbnail,
		characters,
		comics,
		creators,
		events,
		endYear,
		startYear,
		stories,
		type,
	} = serie;
	const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Card maxW="sm">
			<CardBody>
				<Image src={imageUrl} alt={title} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text>{!description ? 'Description not available' : description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				<Button variant="solid" bg="red.600" _hover={{ bg: 'blue.500' }} onClick={onOpen}>
					Details
				</Button>

				<Modal
					size={'5xl'}
					isCentered
					scrollBehavior={'inside'}
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{title}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Flex gap={8} py={4}>
								<Image
									boxSize="md"
									objectFit="contain"
									src={imageUrl}
									alt={title}
									borderRadius="lg"
								/>
								<Accordion allowMultiple flex="1" textTransform="uppercase">
									<AccordionItem>
										<AccordionButton>
											<Box as="span" flex="1" textAlign="left">
												<Heading
													color={'red.500'}
													textTransform="uppercase"
												>
													Description
												</Heading>
											</Box>
											<AccordionIcon />
										</AccordionButton>
										<AccordionPanel bg={'red.500'}>
											<Text textTransform="uppercase">
												{!description
													? 'Description not available'
													: description}
											</Text>
										</AccordionPanel>
									</AccordionItem>
									<SeriesDetails title={'characters'} elements={characters} />
									<SeriesDetails title={'comics'} elements={comics} />
									<SeriesDetails title={'events'} elements={events} />
									<SeriesDetails title={'stories'} elements={stories} />
									<SeriesDetails title={'creators'} elements={creators} />
									<AccordionItem>
										<AccordionButton>
											<Box
												as="span"
												flex="1"
												textAlign="left"
												textTransform="uppercase"
											>
												<Heading color={'red.500'}>Rest of details</Heading>
											</Box>
											<AccordionIcon />
										</AccordionButton>
										<AccordionPanel bg={'red.500'}>
											<Text>First episode in {startYear}</Text>
											<Text>last episode in {endYear}</Text>
											<Text>Type {type}</Text>
										</AccordionPanel>
									</AccordionItem>
								</Accordion>
							</Flex>
						</ModalBody>
					</ModalContent>
				</Modal>
			</CardFooter>
		</Card>
	);
};
