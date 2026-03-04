import type { SVGAttributes } from 'react'
import { cn } from '@libs'

export const BurgerIcon = ({ className, width = 20, height = 20, ...props }: SVGAttributes<SVGSVGElement>) => (
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
        <line x1='4' y1='6' x2='20' y2='6' />
        <line x1='4' y1='12' x2='20' y2='12' />
        <line x1='4' y1='18' x2='20' y2='18' />
    </svg>
)
