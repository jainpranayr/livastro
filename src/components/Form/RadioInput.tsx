import { useAppContext } from '../../context/AppContext'
import { Question } from '../../types'

const RadioInput = () => {
	const { currentQuestion, updateAnswer, currentQuestionAnswers } =
		useAppContext()

	return (
		<div className="my-6 space-y-3">
			<label className="block text-center text-lg capitalize">
				{currentQuestion.question}
			</label>

			<div>
				{currentQuestion.questionoption.map((option, idx) => (
					<div key={option.optionid}>
						<div className="border-y py-2">
							<input
								autoFocus={idx === 0}
								type="radio"
								className="ring-offset-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								value={option.optionvalue}
								checked={currentQuestionAnswers === option.optionvalue}
								onChange={() =>
									updateAnswer(currentQuestion.question, option.optionvalue)
								}
							/>
							<label className="ml-3">{option.optionvalue}</label>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default RadioInput
