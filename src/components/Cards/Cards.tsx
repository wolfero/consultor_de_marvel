import {
	Button,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Card as Cart,
	Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../types/character';
import { Comic } from '../../types/comic';
import { Series } from '../../types/serie';

interface CardProps {
	character: Character;
}

export const CharacterCards = ({ character }: CardProps) => {
	const { id, name, description, thumbnail } = character;
	const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
	const navigate = useNavigate();

	return (
		<Cart maxW="sm">
			<CardBody>
				<Image src={imageUrl} alt={name} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{name}</Heading>
					<Text>{description === '' ? 'Description not available' : description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				<Button
					variant="solid"
					bg="red.600"
					_hover={{ bg: 'blue.500' }}
					onClick={() => navigate(`${id}`)}
				>
					Details
				</Button>
			</CardFooter>
		</Cart>
	);
};

interface ComicProps {
	comic: Comic;
}

export const ComicsCards = ({ comic }: ComicProps) => {
	const { id, title, description, thumbnail } = comic;
	const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
	const navigate = useNavigate();

	return (
		<Cart maxW="sm">
			<CardBody>
				<Image src={imageUrl} alt={title} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text>{description === '' ? 'Description not available' : description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				<Button
					variant="solid"
					bg="red.600"
					_hover={{ bg: 'blue.500' }}
					onClick={() => navigate(`${id}`)}
				>
					Details
				</Button>
			</CardFooter>
		</Cart>
	);
};

interface SeriesProps {
	serie: Series;
}

export const SeriesCards = ({ serie }: SeriesProps) => {
	const { id, title, description, thumbnail } = serie;
	const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;
	const navigate = useNavigate();

	return (
		<Cart maxW="sm">
			<CardBody>
				<Image src={imageUrl} alt={title} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text>{description === '' ? 'Description not available' : description}</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter justifyContent="center">
				<Button
					variant="solid"
					bg="red.600"
					_hover={{ bg: 'blue.500' }}
					onClick={() => navigate(`${id}`)}
				>
					Details
				</Button>
			</CardFooter>
		</Cart>
	);
};