import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import Link from 'next/link'
import { LoadingSpinnerIcon } from '@icon'
import AdButtonStyles from '@libs/styles/ad-button.module.css'
import { cn } from '@libs'

const buttonVariants = cva(
    'relative z-[1] inline-flex items-center justify-center transition-all duration-300 rounded whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                primary:
                    'bg-ad-primary text-white hover:text-ad-primary before:bg-white after:bg-ad-primary border border-ad-primary',
                white: 'bg-white text-ad-primary hover:text-white before:bg-ad-primary after:bg-white border border-ad-primary hover:border-white',
                green: 'bg-ad-green-1 text-white hover:text-ad-green-1 before:bg-white after:bg-ad-green-1 border border-ad-green-1'
            },
            size: {
                none: 'text-md lg:!text-lg font-medium'
            },
            effect: {
                scale: 'hover:scale-105',
                mimas: `${AdButtonStyles.AdButtonEffect} ${AdButtonStyles.AdButtonMimas}`,
                pan: `${AdButtonStyles.AdButtonEffect} ${AdButtonStyles.AdButtonPan}`,
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
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href?: string
    target?: string
    isLoading?: boolean
}

const AdButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

AdButton.displayName = 'Button'

export { AdButton, buttonVariants }
