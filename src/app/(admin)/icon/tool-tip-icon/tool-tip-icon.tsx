import type { SVGAttributes } from 'react'

export const ToolTipIcon = ({ ...props }: SVGAttributes<SVGSVGElement>) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' {...props}>
            <circle cx='10.5' cy='6.75' r='0.75' fill='#6C757D' />
            <path
                d='M9.75 9H10.5V14.25M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
                stroke='#6C757D'
                strokeWidth='0.9'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
