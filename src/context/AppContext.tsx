import { createContext, ReactNode, useContext, useState } from 'react'
import { QuestionData } from '../data'
import { Question } from '../types'

type AppState = {
	currentStep: number
	currentQuestion: Question
	currentAnswer: string | string[] | null
	answers: Record<string, string | string[]>
	questions: Question[]
}

export const AppContext = createContext<{
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
	updateAnswer: (questionId: number, answer: string | string[]) => void
	allAnswers: Record<string, string | string[]>
}>({
	state: {
		currentStep: 0,
		currentQuestion: QuestionData.questions[0],
		currentAnswer: null,
		answers: {},
		questions: QuestionData.questions,
	},
	totalQuestions: 0,
	currentQuestion: QuestionData.questions[0],
	currentQuestionAnswers: null,
	next: () => {},
	prev: () => {},
	submit: () => {},
	isFirstQuestion: true,
	isLastQuestion: false,
	isSubmitted: false,
	updateAnswer: (questionId: number, answer: string | string[]) => {},
	allAnswers: {},
})

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<AppState>({
		currentStep: 0,
		currentQuestion: QuestionData.questions[0],
		currentAnswer: null,
		answers: {},
		questions: QuestionData.questions,
	})
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

	const totalQuestions = state.questions.length
	const currentQuestion = state.questions[state.currentStep]
	const currentQuestionAnswers = state.currentAnswer
	const isFirstQuestion = state.currentStep === 0
	const isLastQuestion = state.currentStep === totalQuestions - 1
	const allAnswers = state.answers

	const next = () => {
		if (state.currentStep < totalQuestions - 1) {
			setState(prevState => ({
				...prevState,
				currentStep: prevState.currentStep + 1,
				currentQuestion: prevState.questions[prevState.currentStep + 1],
				answers: {
					...prevState.answers,
					[prevState.currentQuestion.questionid]: prevState.currentAnswer,
				},
				currentAnswer:
					prevState.answers[
						prevState.questions[prevState.currentStep + 1].questionid
					] || null,
			}))
		}
	}

	const prev = () => {
		if (state.currentStep > 0) {
			setState(prevState => ({
				...prevState,
				currentStep: prevState.currentStep - 1,
				currentQuestion: prevState.questions[prevState.currentStep - 1],
				answers: {
					...prevState.answers,
					[prevState.currentQuestion.questionid]: prevState.currentAnswer,
				},
				currentAnswer:
					prevState.answers[
						prevState.questions[prevState.currentStep - 1].questionid
					] || null,
			}))

			if (isSubmitted) {
				setIsSubmitted(false)
			}
		}
	}

	const submit = () => {
		console.log('Submitted form:', state.answers)
		setIsSubmitted(true)
	}

	const updateAnswer = (questionId: number, answer: string | string[]) => {
		setState(prevState => ({
			...prevState,
			currentAnswer: answer,
			answers: {
				...prevState.answers,
				[questionId]: answer,
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
