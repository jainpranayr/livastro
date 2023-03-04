import { useAppContext } from '../../context/AppContext'
import CheckboxInput from './CheckboxInput'
import DateInpiut from './DateInput'
import RadioInput from './RadioInput'
import TextAreaInput from './TextAreaInput'

const Form = () => {
	const { currentQuestion } = useAppContext()

	return (
		<form>
			{currentQuestion.questiontype === 'Radio' && <RadioInput />}
			{currentQuestion.questiontype === 'Date' && <DateInpiut />}
			{currentQuestion.questiontype === 'Textarea' && <TextAreaInput />}
			{currentQuestion.questiontype === 'Checkbox' && <CheckboxInput />}
		</form>
	)
}

export default Form
