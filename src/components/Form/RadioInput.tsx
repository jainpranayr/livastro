import { useAppContext } from '../../context/AppContext'
import { Question } from '../../types'

const RadioInput = () => {
	const { currentQuestion, updateAnswer } = useAppContext()

	return (
		<div className="my-6 space-y-3">
			<label className="block text-center text-lg capitalize">
				{currentQuestion.question}
			</label>

			<div>
				{currentQuestion.questionoption.map(option => (
					<div key={option.optionid}>
						<div className="border-y py-2">
							<input
								type="radio"
								value={option.optionvalue}
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
