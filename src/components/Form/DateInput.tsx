import { useAppContext } from '../../context/AppContext'
import { dateFormatter } from '../../lib'

const DateInpiut = () => {
	const { currentQuestion, updateAnswer } = useAppContext()

	return (
		<div className="my-6 space-y-3 text-center">
			<label className="block text-lg capitalize">
				{currentQuestion.question}
			</label>
			<input
				autoFocus
				type="datetime-local"
				className="rounded-md border-2 border-gray-300 px-1 shadow-sm focus:border-indigo-500 focus:outline-none"
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
