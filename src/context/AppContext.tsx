import { createContext, ReactNode, useContext, useState } from 'react'
import { QuestionData } from '../data'
import { Question } from '../types'

// Define the Answer type, which is an object with question strings as keys and values of either string or null.
type Answer = {
	[question: string]: string | null
}

// Define the AppState type, which includes information about the current step, current question, current answer,
// all answers, and all questions.
type AppState = {
	currentStep: number
	currentQuestion: Question
	currentAnswer: string | null
	answers: Answer
	questions: Question[]
}

// Define the AppContextType type, which includes the current state of the app, as well as various functions for
// updating and navigating the app.
type AppContextType = {
	state: AppState
	totalQuestions: number
	currentQuestion: Question
	currentQuestionAnswers: string | null
	next: () => void
	prev: () => void
	submit: () => void
	isFirstQuestion: boolean
	isLastQuestion: boolean
	isSubmitted: boolean
	updateAnswer: (question: string, answer: string) => void
	allAnswers: Answer
}

// Define a default state for the app, including the initial question and all questions.
const DEFAULT_STATE: AppState = {
	currentStep: 0,
	currentQuestion: QuestionData.questions[0],
	currentAnswer: null,
	answers: {},
	questions: QuestionData.questions,
}

// Create an AppContext using the createContext function, and provide a default value for the context.
export const AppContext = createContext<AppContextType>({
	state: DEFAULT_STATE,
	totalQuestions: 0,
	currentQuestion: DEFAULT_STATE.currentQuestion,
	currentQuestionAnswers: null,
	next: () => {},
	prev: () => {},
	submit: () => {},
	isFirstQuestion: true,
	isLastQuestion: false,
	isSubmitted: false,
	updateAnswer: () => {},
	allAnswers: {},
})

// Define the AppContextProvider component.
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	// Create state variables for the app's state and whether or not the form has been submitted
	const [state, setState] = useState<AppState>(DEFAULT_STATE)
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	// Define variables for the total number of questions, the current question, the current answer,
	// whether or not this is the first or last question, and all answers provided so far.
	const totalQuestions = state.questions.length
	const currentQuestion = state.questions[state.currentStep]
	const currentQuestionAnswers = state.currentAnswer
	const isFirstQuestion = state.currentStep === 0
	const isLastQuestion = state.currentStep === totalQuestions - 1
	const allAnswers = state.answers

	// Define the updateState function, which updates the app's state with the new step, question, and answer.
	const updateState = (step: number) => {
		// If the form has been submitted, reset the state to the default state and return.
		if (isSubmitted) {
			setState(DEFAULT_STATE)
			return
		}

		// Retrieve the question and answer for the given step.
		const question = state.questions[step]
		const answer = state.answers[question.question] || null

		// Update the state to reflect the new step, question, and answer.
		setState(prevState => ({
			...prevState,
			currentStep: step,
			currentQuestion: question,
			currentAnswer: answer,
			answers: {
				...prevState.answers,
				[prevState.currentQuestion.question]: prevState.currentAnswer,
			},
		}))
	}

	// Define the next function, which updates the state to reflect moving to the next question.
	const next = () => {
		if (state.currentStep < totalQuestions - 1) {
			updateState(state.currentStep + 1)
		}
	}

	// Define the prev function, which updates the state to reflect moving to the previous question.
	const prev = () => {
		if (state.currentStep > 0) {
			updateState(state.currentStep - 1)

			// If the form has been submitted, set isSubmitted to false.
			if (isSubmitted) {
				setIsSubmitted(false)
			}
		}
	}

	// Define the submit function, which logs the answers to the console and sets isSubmitted to true.
	const submit = () => {
		console.log('Submitted form:', state.answers)
		setIsSubmitted(true)
	}

	// Define the updateAnswer function, which updates the state to reflect a new answer for the current question.
	const updateAnswer = (question: string, answer: string) => {
		setState(prevState => ({
			...prevState,
			currentAnswer: answer,
			answers: {
				...prevState.answers,
				[question]: answer,
			},
		}))
	}

	// Return the AppContextProvider component, passing in the necessary state and functions as values for the AppContext.
	return (
		<AppContext.Provider
			value={{
				state,
				totalQuestions,
				currentQuestion,
				currentQuestionAnswers,
				next,
				prev,
				submit,
				isFirstQuestion,
				isLastQuestion,
				updateAnswer,
				allAnswers,
				isSubmitted,
			}}>
			{children}
		</AppContext.Provider>
	)
}

// A custom hook to use AppContext
export const useAppContext = () => useContext(AppContext)
