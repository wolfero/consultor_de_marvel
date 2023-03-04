import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const Main = () => (
	<Box minH={'90vh'}>
		<Flex justifyContent={'center'}>
			<Image src="/logo.svg" boxSize={'sm'} objectFit="contain" alt="Logo Marvel" />
		</Flex>
		<Heading size={'4xl'} textAlign={'center'}>CONSULTANT</Heading>
	</Box>
);

export default Main;
