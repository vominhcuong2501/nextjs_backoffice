import type { SVGAttributes } from 'react'
import { cn } from '@libs'

export const ChevronLeftIcon = ({ className, width = 20, height = 20, ...props }: SVGAttributes<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={cn(className)}
        {...props}
    >
        <path d='M15 18l-6-6 6-6' />
    </svg>
)
