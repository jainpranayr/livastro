import { useAppContext } from '../../context/AppContext'
import { DetailLabel, DetailRow, DetailValue } from './Details'

//  A component for rendering details about a submitted form data
const SubmittedAnswers = () => {
	const { allAnswers } = useAppContext()

	return (
		<div className="my-6 space-y-3">
			<p className="block text-center text-lg capitalize">Your Answers:</p>
			<dl className="mx-auto max-w-max">
				{Object.entries(allAnswers).map(([question, answer]) => (
					<DetailRow key={question}>
						<DetailLabel label={question} />
						<DetailValue value={answer} />
					</DetailRow>
				))}
			</dl>
		</div>
	)
}

export default SubmittedAnswers
