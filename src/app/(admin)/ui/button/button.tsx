import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@libs'
import Link from 'next/link'
import { LoadingSpinnerIcon } from '@icon'

const buttonVariants = cva(
    'relative z-[1] inline-flex items-center justify-center transition-all duration-300 rounded whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                primary: '!text-white hover:!text-primary before:bg-white after:bg-primary border border-primary',
                white: 'text-primary hover:text-white before:bg-primary after:bg-white border hover:border-white',
                green: 'text-white hover:text-green-2 before:bg-white after:bg-green-2'
            },
            size: {
                none: 'text-md lg:!text-lg font-medium'
            },
            effect: {
                scale: 'hover:scale-105',
                mimas: 'button-effect button-mimas',
                pan: 'button-effect button-pan',
                none: ''
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'none',
            effect: 'pan'
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    href?: string
    target?: string
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            effect,
            href,
            target = '_self',
            children,
            disabled,
            isLoading,
            title,
            type = 'button',
            ...props
        },
        ref
    ) => {
        if (href)
            return (
                <Link
                    className={cn(buttonVariants({ variant, size, effect, className }))}
                    href={href}
                    target={target}
                    title={title}
                >
                    <span>{children}</span>
                </Link>
            )

        return (
            <button
                className={cn(buttonVariants({ variant, size, effect, className }))}
                ref={ref}
                type={type}
                title={title}
                disabled={disabled}
                {...props}
            >
                <span>{children}</span>
                {isLoading && <LoadingSpinnerIcon className='mx-2 inline h-4 w-4 animate-spin fill-white' />}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
