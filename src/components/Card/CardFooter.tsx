import { useAppContext } from '../../context/AppContext'
import { Button } from '../Common'

const CardFooter = () => {
	const { isLastQuestion, isSubmitted, next, submit } = useAppContext()

	return (
		<div className="flex items-center bg-slate-50 px-4 py-6">
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
