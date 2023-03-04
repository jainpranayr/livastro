import { ReactNode } from 'react'

//  Set of components for rendering details as label: value

export const DetailRow = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex items-center justify-start space-x-3">
			<div>{children}</div>
		</div>
	)
}

export const DetailLabel = ({ label }: { label: string }) => {
	return <span className="mr-4 text-gray-700">{label}:</span>
}

export const DetailValue = ({ value }: { value: string | null }) => {
	if (!value || value.length === 0) {
		return <span className="text-red-500">Not Answered</span>
	}

	return <span className="text-gray-800">{value}</span>
}
