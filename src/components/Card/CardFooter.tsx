import { useAppContext } from '../../context/AppContext'
import { Button } from '../Common'

// A component that displays the 'Next' or 'Submit' button based on the current form state
const CardFooter = () => {
	// Get relevant state and functions from the AppContext using a custom hook
	const { isLastQuestion, isSubmitted, next, submit } = useAppContext()

	return (
		<div className="flex items-center bg-slate-50 px-4 py-6">
			{/* Render either a "Thank you" message or a button for moving to the next question or submitting the form */}
			{isSubmitted ? (
				<p className="w-full text-center">Thank you for submitting the form!</p>
			) : (
				<Button className="ml-auto" onClick={isLastQuestion ? submit : next}>
					{isLastQuestion ? 'Submit' : 'Next'}
				</Button>
			)}
		</div>
	)
}

export default CardFooter
