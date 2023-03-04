import { useAppContext } from '../../context/AppContext'
import { dateFormatter } from '../../lib'

const DateInpiut = () => {
	const { currentQuestion, updateAnswer, currentQuestionAnswers } =
		useAppContext()

	return (
		<div className="my-6 space-y-3 text-center">
			<label className="block text-lg capitalize">
				{currentQuestion.question}
			</label>
			<input
				type="datetime-local"
				onChange={e =>
					updateAnswer(
						currentQuestion.question,
						dateFormatter.format(new Date(e.target.value))
					)
				}
			/>
		</div>
	)
}

export default DateInpiut
