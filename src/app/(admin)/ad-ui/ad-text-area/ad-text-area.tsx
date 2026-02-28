import type { CSSProperties, TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import styles from './style.module.css'
import { cn } from '@libs'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    errorMessage?: string
    classNameInput?: string
    classNameError?: string
    id?: string
    nameLabel?: string
    classNameLabel?: string
    resize?: CSSProperties['resize']
}

export const AdTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
    {
        errorMessage,
        className,
        classNameInput,
        classNameError,
        id,
        nameLabel,
        classNameLabel,
        resize,
        ...restParams
    }: TextAreaProps,
    ref
) {
    return (
        <div className={`${className} w-full text-14`}>
            <div className='flex flex-col gap-2'>
                <label
                    htmlFor={id}
                    className={cn(
                        'font-medium text-ad-black text-16 lg:!text-xl',
                        restParams.required && 'label-required ',
                        !nameLabel && 'hidden',
                        classNameLabel
                    )}
                >
                    {nameLabel}
                </label>
                <textarea
                    className={cn(
                        `${styles.styleScroll} hover:shadow-1 md:placeholder:!text-20 transition-all duration-300 font-light border-ad-gray-1 px-2.5 py-4 !text-16 md:!text-xl placeholder:text-16 placeholder:font-light lg:placeholder:text-xl hover:border-ad-blue text-ad-black min-h-[125px] rounded-[2px] border placeholder:text-ad-placeholder w-full appearance-none focus:outline-none focus:ring-0`,
                        errorMessage && 'border-ad-error',
                        classNameInput
                    )}
                    ref={ref}
                    {...restParams}
                    rows={2}
                    style={{ resize }}
                />
            </div>

            {errorMessage && (
                <div
                    className={cn('text-ad-error mt-[2px]', classNameError)}
                    dangerouslySetInnerHTML={{ __html: errorMessage }}
                ></div>
            )}
        </div>
    )
})
