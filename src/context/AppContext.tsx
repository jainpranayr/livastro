import { createContext, ReactNode, useContext, useState } from 'react'
import { QuestionData } from '../data'
import { Question } from '../types'

type Answer = {
	[question: string]: string | string[] | null
}

type AppState = {
	currentStep: number
	currentQuestion: Question
	currentAnswer: string | string[] | null
	answers: Answer
	questions: Question[]
}

type AppContextType = {
	state: AppState
	totalQuestions: number
	currentQuestion: Question
	currentQuestionAnswers: string | string[] | null
	next: () => void
	prev: () => void
	submit: () => void
	isFirstQuestion: boolean
	isLastQuestion: boolean
	isSubmitted: boolean
	updateAnswer: (question: string, answer: string | string[]) => void
	allAnswers: Answer
}

const DEFAULT_STATE: AppState = {
	currentStep: 0,
	currentQuestion: QuestionData.questions[0],
	currentAnswer: null,
	answers: {},
	questions: QuestionData.questions,
}

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

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<AppState>(DEFAULT_STATE)
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	const totalQuestions = state.questions.length
	const currentQuestion = state.questions[state.currentStep]
	const currentQuestionAnswers = state.currentAnswer
	const isFirstQuestion = state.currentStep === 0
	const isLastQuestion = state.currentStep === totalQuestions - 1
	const allAnswers = state.answers

	const updateState = (step: number) => {
		if (isSubmitted) {
			setState(DEFAULT_STATE)
			return
		}

		const question = state.questions[step]
		const answer = state.answers[question.question] || null

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

	const next = () => {
		if (state.currentStep < totalQuestions - 1) {
			updateState(state.currentStep + 1)
		}
	}

	const prev = () => {
		if (state.currentStep > 0) {
			updateState(state.currentStep - 1)

			if (isSubmitted) {
				setIsSubmitted(false)
			}
		}
	}

	const submit = () => {
		console.log('Submitted form:', state.answers)
		setIsSubmitted(true)
	}

	const updateAnswer = (question: string, answer: string | string[]) => {
		setState(prevState => ({
			...prevState,
			currentAnswer: answer,
			answers: {
				...prevState.answers,
				[question]: answer,
			},
		}))
	}

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

export const useAppContext = () => useContext(AppContext)
