import { Question } from '../../types'
import CheckboxInput from './CheckboxInput'
import DateInput from './DateInput'
import RadioInput from './RadioInput'
import TextAreaInput from './TextAreaInput'

// Define a type that represents the possible values for the `questiontype` property of a `Question` object
type QuestionType = Question['questiontype']

// Define a mapping of `QuestionType` values to React component types
type InputComponentMap = {
	[key in QuestionType]: React.ComponentType
}

// Create an object that maps `QuestionType` values to the corresponding input component
export const INPUT_COMPONENTS: InputComponentMap = {
	Radio: RadioInput,
	Date: DateInput,
	Textarea: TextAreaInput,
	Checkbox: CheckboxInput,
}
