import { Box, Container, Stack, Text } from '@chakra-ui/react';

import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<Box className={styles.Footer} borderTop={'1px'}>
			<Container as={Stack} maxW={'6xl'} className={styles.container}>
				<Text fontSize={'1.25rem'}>Frantisek Klucar</Text>
			</Container>
		</Box>
	);
};

export default Footer;
