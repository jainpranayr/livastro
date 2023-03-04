import { ChangeEvent, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const TextAreaInput = () => {
	// Get relevant state and functions from the AppContext using a custom hook
	const { currentQuestion, updateAnswer, currentQuestionAnswers } =
		useAppContext()

	// Initialize the textAreaValue state with the current question's answers if they exist
	const [textAreaValue, setTextAreaValue] = useState(
		currentQuestionAnswers || ''
	)

	// A function to handle textarea change events
	const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		// Update the state with the new value of the datetime input field
		setTextAreaValue(e.target.value)
		// Call the `updateAnswer` function with the current question's question and the new dateTime value
		updateAnswer(currentQuestion.question, textAreaValue)
	}

	return (
		<div className="my-6 space-y-3">
			<label className="block text-center text-lg capitalize">
				{currentQuestion.question}
			</label>

			{/* Displaying the textarea input field */}
			<textarea
				autoFocus
				rows={6}
				name="comment"
				id="comment"
				value={textAreaValue}
				className="block w-full rounded-md border-2 border-gray-300 px-2 shadow-sm focus:border-indigo-500 focus:outline-none sm:text-sm"
				onChange={handleTextAreaChange}
			/>
		</div>
	)
}

export default TextAreaInput
