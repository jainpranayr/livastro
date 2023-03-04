import { ChangeEvent, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const DateInpiut = () => {
	const { currentQuestion, updateAnswer, currentQuestionAnswers } =
		useAppContext()

	const [value, setValue] = useState(currentQuestionAnswers || '')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		updateAnswer(currentQuestion.question, e.target.value)
	}

	return (
		<div className="my-6 space-y-3 text-center">
			<label className="block text-lg capitalize">
				{currentQuestion.question}
			</label>
			<input
				autoFocus
				type="datetime-local"
				className="rounded-md border-2 border-gray-300 px-1 shadow-sm focus:border-indigo-500 focus:outline-none"
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default DateInpiut
