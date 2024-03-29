import { SVGProps } from 'react'

export const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={800}
		height={800}
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z"
			fill="#5C5F62"
		/>
	</svg>
)
