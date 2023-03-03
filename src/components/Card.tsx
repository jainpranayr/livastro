import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
	return (
		<div className="mx-auto flex h-96 max-w-lg flex-col divide-y rounded-sm shadow">
			{children}
		</div>
	)
}

export default Card
