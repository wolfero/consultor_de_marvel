import useSection from '../../hooks/useSection';
import { ErrorAlert } from '../ErrorAlert/ErrorAlert';
import { Spinner } from '../Spinner/Spinner';

interface SectionsProps {
	load: string;
}

const Section = (load: SectionsProps) => {
	const { characters,comics,series, error } = useSection();



	return (
		<>
			{error.code === 0 ? (
				characters != null ? (
					error.code === 0 ? (
						''
					) : (
						<ErrorAlert message={characters.status} />
					)
				) : (
					<Spinner />
				)
			) : (
				<ErrorAlert message={error.message} />
			)}
		</>
	);
};

export default Section;
