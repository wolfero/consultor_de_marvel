import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

interface ErrorMessage {
	message: string;
}

const appAlert = {
	marginTop: 8,
	rounded: 'xl',
	textAlign: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	justifyContent: 'center',
};

const appAlertTitle = {
	my: 4,
	fontSize: 'lg',
	textTransform: 'uppercase',
};

export const ErrorAlert = (error: ErrorMessage) => {
	return (
		<Alert status="error" sx={appAlert}>
			<AlertIcon boxSize="40px" mr={0} />
			<AlertTitle sx={appAlertTitle}>{error.message}</AlertTitle>
		</Alert>
	);
};
