export type QuestionOption = {
	optionid: number
	optionvalue: string
	price: number
	optionaction: string
	selected: boolean
	subquestion: any[]
}

export type Question = {
	questionid: number
	question: string
	questiontype: 'Radio' | 'Checkbox' | 'Textarea' | 'Date'
	attributetype: number
	validation: boolean
	questionoption: QuestionOption[]
}
