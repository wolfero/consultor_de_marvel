import { Box, Flex, HStack, IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import NavItem from '../NavItem/NavItem';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box px={4}>
			<Flex h={16} className={styles.menu}>
				<IconButton
					size={'md'}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={'Open Menu'}
					display={{ md: 'none' }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8}>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						<NavItem name={'Characters'} path={'/characters'} />
						<NavItem name={'Comics'} path={'/comics'} />
						<NavItem name={'Series'} path={'/series'} />
					</HStack>
				</HStack>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4}>
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
