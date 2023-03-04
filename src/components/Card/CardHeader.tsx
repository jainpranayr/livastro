import { LeftArrowIcon } from '../../assets/icons'
import { useAppContext } from '../../context/AppContext'

const CardHeader = () => {
	const { isFirstQuestion, prev, state, totalQuestions } = useAppContext()
	const { currentStep } = state

	return (
		<div className="flex items-center bg-slate-50 px-4 py-6">
			{!isFirstQuestion && (
				<button
					onClick={prev}
					className="rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					<LeftArrowIcon className="h-6 w-6 cursor-pointer text-black" />
				</button>
			)}
			<div className="ml-auto max-w-max">
				<span>{currentStep + 1}</span> / <span>{totalQuestions}</span>
			</div>
		</div>
	)
}

export default CardHeader
