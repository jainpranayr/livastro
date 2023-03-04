import { ChangeEvent, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const TextAreaInput = () => {
	const { currentQuestion, updateAnswer, currentQuestionAnswers } =
		useAppContext()

	const [value, setValue] = useState(currentQuestionAnswers || '')

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value)
		updateAnswer(currentQuestion.question, e.target.value)
	}

	return (
		<div className="my-6 space-y-3">
			<label className="block text-center text-lg capitalize">
				{currentQuestion.question}
			</label>
			<textarea
				autoFocus
				rows={6}
				name="comment"
				id="comment"
				value={value}
				className="block w-full rounded-md border-2 border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:outline-none sm:text-sm"
				onChange={handleChange}
			/>
		</div>
	)
}

export default TextAreaInput
