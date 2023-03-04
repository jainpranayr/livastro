import { ChangeEvent, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const DateInpiut = () => {
	// Get relevant state and functions from the AppContext using a custom hook
	const { currentQuestion, updateAnswer, currentQuestionAnswers } =
		useAppContext()

	// Initialize the dateTimeValue state to store the current value of the datetime input field
	const [dateTimeValue, setDateTimeValue] = useState(
		currentQuestionAnswers || ''
	)

	// A function to handle datetime change events
	const handleDateTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
		// Update the state with the new value of the datetime input field
		setDateTimeValue(e.target.value)
		// Call the `updateAnswer` function with the current question's question and the new dateTime value
		updateAnswer(currentQuestion.question, e.target.value)
	}

	return (
		<div className="my-6 space-y-3 text-center">
			{/* Display the question */}
			<label className="block text-lg capitalize">
				{currentQuestion.question}
			</label>

			{/* Displaying the datetime input field */}
			<input
				autoFocus
				type="datetime-local"
				className="rounded-md border-2 border-gray-300 px-1 shadow-sm focus:border-indigo-500 focus:outline-none"
				value={dateTimeValue}
				onChange={handleDateTimeChange}
			/>
		</div>
	)
}

export default DateInpiut
