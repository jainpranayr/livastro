import Card from './components/Card'
import CardFooter from './components/CardFooter'
import CardHeader from './components/CardHeader'
import Form from './components/Form'

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
