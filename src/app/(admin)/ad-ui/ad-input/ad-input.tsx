'use client'

import type { ChangeEvent, InputHTMLAttributes } from 'react'
import { forwardRef, useState } from 'react'
import { HideIcon, ViewIcon } from '@icon'
import { cn, formatNumber } from '@libs'
import { INPUT_TYPES } from '@constants'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string
    classNameInput?: string
    classNameError?: string
    classNameIcon?: string
    id?: string
    nameLabel?: string
    classNameLabel?: string
    tooltip?: string
    classNameTooltip?: string
    variant?: string
    isCountMaxLength?: boolean
}

export const AdInput = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        errorMessage,
        className,
        classNameInput,
        classNameError = 'absolute -bottom-5 left-0 text-sm',
        classNameIcon = 'absolute bottom-3 right-3 cursor-pointer',
        id,
        placeholder,
        nameLabel,
        classNameLabel,
        type,
        isCountMaxLength,
        ...restParams
    },
    ref
) {
    const [visible, setVisible] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const toggleVisible = () => setVisible((prev) => !prev)

    const handleType = () => {
        if (type === INPUT_TYPES.password) {
            return visible ? INPUT_TYPES.text : INPUT_TYPES.password
        }

        return type
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/ {2,}/g, ' ')
        const formattedValue = formatNumber(rawValue)
        e.target.value = type === 'number' || type === 'tel' ? formattedValue : rawValue
        setInputValue(e.target.value)
    }

    const inputBaseClasses =
        'text-md lg:!text-xl font-light text-ad-black w-full appearance-none outline-none ring-0 bg-transparent transition-all duration-300'

    const defaultInput = cn(
        inputBaseClasses,
        'rounded-[2px] border hover:border-ad-blue hover:shadow-1 transition-all duration-300 border-ad-gray-1 p-3 placeholder:text-16 placeholder:font-light lg:placeholder:!text-xl placeholder:text-ad-placeholder disabled:bg-disable disabled:pointer-events-none focus:border-secondary focus:shadow-8 lg:!text-20 text-16',
        errorMessage && 'border-ad-error',
        classNameInput
    )

    return (
        <div className={className}>
            <div className='relative flex flex-col gap-2'>
                {nameLabel && (
                    <label
                        htmlFor={id}
                        className={cn(
                            'text-md lg:!text-xl text-ad-black font-medium',
                            classNameLabel,
                            restParams.required && 'label-required'
                        )}
                        dangerouslySetInnerHTML={{ __html: nameLabel || '' }}
                    />
                )}

                <input
                    {...restParams}
                    ref={ref}
                    onChange={(e) => {
                        handleChange(e)
                        restParams?.onChange?.(e)
                    }}
                    type={handleType()}
                    className={defaultInput}
                    placeholder={placeholder}
                />

                <style jsx>
                    {`
                        input::-webkit-outer-spin-button,
                        input::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }

                        input[type='number'] {
                            -moz-appearance: textfield;
                        }
                    `}
                </style>

                {errorMessage && (
                    <div
                        className={cn('text-ad-error', classNameError)}
                        dangerouslySetInnerHTML={{ __html: errorMessage }}
                    />
                )}

                {isCountMaxLength && (
                    <p className='text-ad-gray-2 text-12 absolute right-0 -bottom-5'>
                        {inputValue.length}/{restParams.maxLength}
                    </p>
                )}

                {type === INPUT_TYPES.password &&
                    (visible ? (
                        <ViewIcon onClick={toggleVisible} className={classNameIcon} />
                    ) : (
                        <HideIcon onClick={toggleVisible} className={classNameIcon} />
                    ))}
            </div>
        </div>
    )
})
