import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import './style.css'
import { cn } from '@libs'

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string
    classNameInput?: string
    classNameError?: string
    nameLabel?: string
    classNameLabel?: string
    minDate?: string
    maxDate?: string
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(function Date(
    {
        errorMessage,
        className,
        classNameInput,
        classNameError,
        nameLabel,
        classNameLabel,
        id,
        minDate,
        maxDate,
        ...restParams
    }: DateInputProps,
    ref
) {
    const inputId = id || 'date-input'

    return (
        <div className={cn('flex gap-2 flex-col relative', className)}>
            {nameLabel && (
                <label
                    htmlFor={inputId}
                    className={cn(
                        'text-md lg:!text-xl text-black font-medium',
                        classNameLabel,
                        restParams.required && 'label-required'
                    )}
                >
                    {nameLabel}
                </label>
            )}
            <input
                id={inputId}
                type='date'
                min={minDate}
                max={maxDate}
                className={cn(
                    'uppercase border h-[50px] px-3 font-light',
                    errorMessage && 'border-error',
                    classNameInput
                )}
                ref={ref}
                {...restParams}
            />
            {errorMessage && (
                <span className={cn('text-error absolute -bottom-4 left-0 text-sm', classNameError)}>
                    {errorMessage}
                </span>
            )}
        </div>
    )
})
