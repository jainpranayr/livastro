import { Card, CardFooter, CardHeader } from './components/Card'
import { SubmittedAnswers } from './components/Common'
import { Form } from './components/Form'
import { useAppContext } from './context/AppContext'

function App() {
	const { isSubmitted } = useAppContext()

	return (
		<div className="min-h-screen w-screen bg-zinc-100 py-20 px-4">
			<Card>
				<CardHeader />
				<div className="w-full flex-1 bg-white px-6">
					{isSubmitted ? <SubmittedAnswers /> : <Form />}
				</div>
				<CardFooter />
			</Card>
		</div>
	)
}

export default App
