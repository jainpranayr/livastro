import { useAppContext } from '../context/AppContext'
import { DetailLabel, DetailRow, DetailValue } from './Details'

const Form = () => {
	const { currentQuestion, isSubmitted, allAnswers } = useAppContext()

	return (
		<>
			{isSubmitted ? (
				<div className="w-full flex-1 bg-white">
					<p className="my-6 block text-center text-lg capitalize">
						Your Answers:
					</p>
					<dl className="mx-auto max-w-max">
						{Object.entries(allAnswers).map(([question, answer]) => (
							<DetailRow key={question}>
								<DetailLabel label={question} />
								<DetailValue value={answer} />
							</DetailRow>
						))}
					</dl>
				</div>
			) : (
				<form className="w-full flex-1 bg-white">
					<label className="my-6 block text-center text-lg capitalize">
						{currentQuestion.question}
					</label>
					{/* render form inputs here */}
				</form>
			)}
		</>
	)
}

export default Form
