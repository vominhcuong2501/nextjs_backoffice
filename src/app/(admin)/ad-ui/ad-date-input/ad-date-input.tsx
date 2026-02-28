import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import styles from './style.module.css'
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

export const AdDateInput = forwardRef<HTMLInputElement, DateInputProps>(function Date(
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
        <div className={cn(styles.root, 'flex gap-2 flex-col relative', className)}>
            {nameLabel && (
                <label
                    htmlFor={inputId}
                    className={cn(
                        'text-md lg:!text-xl text-ad-black font-medium',
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
                    errorMessage && 'border-ad-error',
                    classNameInput
                )}
                ref={ref}
                {...restParams}
            />
            {errorMessage && (
                <span className={cn('text-ad-error absolute -bottom-4 left-0 text-sm', classNameError)}>
                    {errorMessage}
                </span>
            )}
        </div>
    )
})
