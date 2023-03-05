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
	VStack,
} from '@chakra-ui/react';
import { Character } from '../../types/characters';
import { Comic } from '../../types/comics';
import { Series } from '../../types/serie';

interface CardProps {
	character: Character;
}

export const CharacterCards = ({ character }: CardProps) => {
	const { id, name, description, thumbnail } = character;
	const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Card maxW="sm">
			<CardBody>
				<Image src={imageUrl} alt={name} borderRadius="lg"/>
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
					blockScrollOnMount={false}
					size={'2xl'}
					isOpen={isOpen}
					isCentered
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{name}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<VStack p={5} spacing="3">
								<Image
									boxSize="md"
									objectFit="contain"
									src={imageUrl}
									alt={name}
									borderRadius="lg"
								/>
								<Text>
									{!description ? 'Description not available' : description}
								</Text>
							</VStack>
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
	const { id, title, description, thumbnail } = comic;
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
					blockScrollOnMount={false}
					size={'2xl'}
					isOpen={isOpen}
					isCentered
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{title}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<VStack p={5} spacing="3">
								<Image
									boxSize="md"
									objectFit="contain"
									src={imageUrl}
									alt={title}
									borderRadius="lg"
								/>
								<Text>
									{!description ? 'Description not available' : description}
								</Text>
							</VStack>
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
	const { id, title, description, thumbnail } = serie;
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
					blockScrollOnMount={false}
					size={'2xl'}
					isOpen={isOpen}
					isCentered
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{title}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<VStack p={5} spacing="3">
								<Image
									boxSize="md"
									objectFit="contain"
									src={imageUrl}
									alt={title}
									borderRadius="lg"
								/>
								<Text>
									{!description ? 'Description not available' : description}
								</Text>
							</VStack>
						</ModalBody>
					</ModalContent>
				</Modal>
			</CardFooter>
		</Card>
	);
};
