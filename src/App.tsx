import { useAppContext } from './context/AppContext'

function App() {
	const {
		state,
		next,
		prev,
		isFirstQuestion,
		isLastQuestion,
		submit,
		isSubmitted,
		allAnswers,
	} = useAppContext()

	return (
		<div className="mx-auto my-20 max-w-lg bg-blue-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<h1>Current Step: {state.currentStep}</h1>

			<div className="mt-6 flex flex-row gap-5">
				{!isFirstQuestion && (
					<button
						onClick={prev}
						className="rounded bg-blue-500  px-2 py-1 text-white">
						Prvious
					</button>
				)}

				{isLastQuestion ? (
					<button
						onClick={submit}
						className="rounded bg-blue-500  px-2 py-1 text-white">
						Submit
					</button>
				) : (
					<button
						onClick={next}
						className="rounded bg-blue-500  px-2 py-1 text-white">
						Next
					</button>
				)}
			</div>

			{isSubmitted && (
				<>
					<hr className="my-10 h-1 bg-gray-50" />
					<div>
						{state.questions.map(question => (
							<p key={question.questionid}>{question.question}</p>
						))}

						{Object.values(allAnswers).map((answer, idx) => (
							<p key={idx}>{answer ?? 'answer'}</p>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default App
