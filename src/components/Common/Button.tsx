import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button
			className={`max-w-max rounded border border-transparent bg-red-700 py-1 px-4 text-sm uppercase text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${className}`}
			{...props}>
			{children}
		</button>
	)
}

export default Button
