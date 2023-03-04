import { useRouteError } from 'react-router-dom';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import styles from './ErrorPage.module.scss';

interface ErrorResponse {
	data: string;
	error: {
		message: string;
		stack: string;
	};
	internal: boolean;
	status: number;
	statusText: string;
}

export default function ErrorPage() {
	const errorResponse = useRouteError() as ErrorResponse;
	return <ErrorAlert message={errorResponse.error.message} />;
}
