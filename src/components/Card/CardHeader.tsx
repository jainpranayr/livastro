import { LeftArrowIcon } from '../../assets/icons'
import { useAppContext } from '../../context/AppContext'

// CardHeader component that displays the current step of the form and a back button
const CardHeader = () => {
	// Get relevant state and functions from the AppContext using a custom hook
	const { isFirstQuestion, prev, state, totalQuestions } = useAppContext()
	const { currentStep } = state

	return (
		<div className="flex items-center bg-slate-50 px-4 py-6">
			{/* Render a button for going back to the previous question if not on the first question */}
			{!isFirstQuestion && (
				<button
					onClick={prev}
					className="rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					<LeftArrowIcon className="h-6 w-6 cursor-pointer text-black" />
				</button>
			)}

			{/* Render the current question number and total number of questions */}
			<div className="ml-auto max-w-max">
				<span>{currentStep + 1}</span> / <span>{totalQuestions}</span>
			</div>
		</div>
	)
}

export default CardHeader
