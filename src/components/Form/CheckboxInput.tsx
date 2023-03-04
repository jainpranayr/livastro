import { useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const CheckboxInput = () => {
	const { currentQuestion, updateAnswer, currentQuestionAnswers } =
		useAppContext()
	const [selectedValues, setSelectedValues] = useState<string[]>(
		currentQuestionAnswers?.split(', ') ?? []
	)

	const handleCheckboxChange = (value: string) => {
		setSelectedValues(prevSelectedValues => {
			if (prevSelectedValues.includes(value)) {
				return prevSelectedValues.filter(v => v !== value)
			}
			return [...prevSelectedValues, value]
		})
		updateAnswer(currentQuestion.question, selectedValues.join(', '))
	}

	return (
		<div className="my-6 space-y-3">
			<label className="block text-center text-lg capitalize">
				{currentQuestion.question}
			</label>

			<div>
				{currentQuestion.questionoption.map((option, idx) => (
					<div key={option.optionid} className="border-y py-2">
						<input
							autoFocus={idx === 0}
							type="checkbox"
							className="rounded border-gray-300 text-indigo-600 ring-offset-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							id={`${currentQuestion.questionid}_${option.optionid}`}
							value={option.optionvalue}
							checked={selectedValues.includes(option.optionvalue)}
							onChange={() => handleCheckboxChange(option.optionvalue)}
							onBlur={() =>
								updateAnswer(
									currentQuestion.question,
									selectedValues.join(', ')
								)
							}
						/>
						<label
							htmlFor={`${currentQuestion.questionid}_${option.optionid}`}
							className="ml-3">
							{option.optionvalue}
						</label>
					</div>
				))}
			</div>
		</div>
	)
}

export default CheckboxInput
