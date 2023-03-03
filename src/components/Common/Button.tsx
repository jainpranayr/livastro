import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button
			className={`max-w-max rounded bg-red-700 py-1 px-4 text-sm uppercase text-white ${className}`}
			{...props}>
			{children}
		</button>
	)
}

export default Button
