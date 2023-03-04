import { useAppContext } from '../../context/AppContext'

const TextAreaInput = () => {
	const { currentQuestion, updateAnswer } = useAppContext()

	return (
		<div className="my-6 space-y-3">
			<label className="block text-center text-lg capitalize">
				{currentQuestion.question}
			</label>
			<textarea
				rows={6}
				name="comment"
				id="comment"
				className="block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				defaultValue={''}
				onChange={e => updateAnswer(currentQuestion.question, e.target.value)}
			/>
		</div>
	)
}

export default TextAreaInput
