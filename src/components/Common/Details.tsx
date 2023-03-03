import { ReactNode } from 'react'

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

export const DetailValue = ({ value }: { value: string | string[] | null }) => {
	return (
		<span className={`truncate ${value ? 'text-gray-800' : 'text-red-500'}`}>
			{value || 'Not Answerd'}
		</span>
	)
}
