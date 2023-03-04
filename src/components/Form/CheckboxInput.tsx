import { useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const CheckboxInput = () => {
	const { currentQuestion, updateAnswer } = useAppContext()
	const [selectedValues, setSelectedValues] = useState<string[]>([])

	const handleCheckboxChange = (value: string) => {
		setSelectedValues(prevSelectedValues => {
			if (prevSelectedValues.includes(value)) {
				return prevSelectedValues.filter(v => v !== value)
			}
			return [...prevSelectedValues, value]
		})
		updateAnswer(currentQuestion.question, selectedValues)
	}

	return (
		<div className="my-6 space-y-3">
			<label className="block text-center text-lg capitalize">
				{currentQuestion.question}
			</label>

			<div>
				{currentQuestion.questionoption.map(option => (
					<div key={option.optionid} className="border-y py-2">
						<input
							type="checkbox"
							id={`${currentQuestion.questionid}_${option.optionid}`}
							value={option.optionvalue}
							checked={selectedValues.includes(option.optionvalue)}
							onChange={() => handleCheckboxChange(option.optionvalue)}
							onBlur={() =>
								updateAnswer(currentQuestion.question, selectedValues)
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
