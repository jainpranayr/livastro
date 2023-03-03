import { Card, CardFooter, CardHeader } from './components/Card'
import { Form } from './components/Form'

function App() {
	return (
		<div className="min-h-screen w-screen bg-zinc-100 py-20 px-4">
			<Card>
				<CardHeader />
				<Form />
				<CardFooter />
			</Card>
		</div>
	)
}

export default App
