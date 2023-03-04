import { useAppContext } from '../../context/AppContext'
import { INPUT_COMPONENTS } from './utils'

const Form = (): JSX.Element => {
	// Get the current question from the app context
	const { currentQuestion } = useAppContext()

	// Look up the input component for the current question's questiontype using the INPUT_COMPONENTS object
	const InputComponent = INPUT_COMPONENTS[currentQuestion.questiontype]

	return (
		<form>
			{/* Render the input component if it exists for the current question's questiontype, otherwise show a message */}
			{InputComponent ? (
				<InputComponent />
			) : (
				<p className="my-6 block text-center text-lg capitalize">
					No question to display
				</p>
			)}
		</form>
	)
}

export default Form
