import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import NavItem from '../NavItem/NavItem';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box px={4}>
			<Flex h={16} className={styles.menu} display={{ base: 'none', md: 'flex' }}>
				<HStack spacing={8}>
					<HStack as={'nav'} spacing={4}>
						<Link to={'/'}>
							<Image
								src="/initial.svg"
								boxSize={'39'}
								objectFit="contain"
								alt="Logo Marvel"
							/>
						</Link>
						<NavItem name={'Characters'} path={'/characters'} />
						<NavItem name={'Comics'} path={'/comics'} />
						<NavItem name={'Series'} path={'/series'} />
					</HStack>
				</HStack>
			</Flex>
			<Flex h={16} mt={4} display={{ md: 'none' }}>
				<IconButton
					size={'lg'}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={'Open Menu'}
					onClick={isOpen ? onClose : onOpen}
				/>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4} alignItems={'center'}>
						<Link to={'/'}>
							<Image
								src="/initial.svg"
								boxSize={'39'}
								objectFit="contain"
								alt="Logo Marvel"
							/>
						</Link>
						<NavItem name={'Characters'} path={'/characters'} />
						<NavItem name={'Comics'} path={'/comics'} />
						<NavItem name={'Series'} path={'/series'} />
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default Navbar;
