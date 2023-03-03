import { LeftArrowIcon } from '../assets/icons'
import { useAppContext } from '../context/AppContext'

const CardHeader = () => {
	const { isFirstQuestion, prev, state, totalQuestions } = useAppContext()
	const { currentStep } = state

	return (
		<div className="flex items-center bg-slate-50 px-4 py-6">
			{!isFirstQuestion && (
				<LeftArrowIcon
					className="h-6 w-6 cursor-pointer text-black"
					onClick={prev}
				/>
			)}
			<div className="ml-auto max-w-max">
				<span>{currentStep + 1}</span> / <span>{totalQuestions}</span>
			</div>
		</div>
	)
}

export default CardHeader
