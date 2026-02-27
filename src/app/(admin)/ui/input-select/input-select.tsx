/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useController, type FieldValues, type UseControllerProps } from 'react-hook-form'
import {
    default as Select,
    components,
    type DropdownIndicatorProps,
    type InputProps,
    type SelectInstance,
    type StylesConfig
} from 'react-select'
import { cn, useDisplay, useMounted } from '@libs'
import { TooltipPopup } from '../tooltip-popup'
import type { TooltipPopupProps } from '../tooltip-popup'

export interface SelectOptionProps {
    id?: string
    value: string | number
    label: string | number
    icon?: string
    state_count?: number
    source?: string | number
}

export interface GroupSelectOptions {
    label: string
    options: { label: string; value: number }[]
}

type InputSelectOptions = SelectOptionProps[] | GroupSelectOptions[] | undefined

interface InputSelectProps {
    option: InputSelectOptions
    name: string
    id: string
    control: UseControllerProps<any>['control']
    defaultValue?: { value: string; label: string }
    isSearchable?: boolean
    isDisabled?: boolean
    isLoading?: boolean
    isErrors?: boolean
    isRequired?: boolean
    nameLabel?: string
    placeholder?: string
    className?: string
    classNamePrefix?: string
    classNameLabel?: string
    classNameError?: string
    isShowPlaceholder?: boolean
    controlStyle?: Record<string, unknown>
    placeholderStyle?: Record<string, unknown>
    inputStyle?: Record<string, unknown>
    singleValueStyle?: Record<string, unknown>
    onSelect?: (value: SelectOptionProps) => void
    variant?: string
    colorIcon?: string
    isFlag?: boolean
    isDropdownIcon?: boolean
    tooltip?: TooltipPopupProps
    isDefaultMenuIsOpen?: boolean
    tabIndex?: number
}

export const InputSelect = <T extends FieldValues>(props: UseControllerProps<T> & InputSelectProps) => {
    const {
        option,
        control,
        defaultValue,
        isSearchable,
        isDisabled,
        isLoading,
        isErrors,
        isRequired,
        name,
        nameLabel,
        placeholder,
        className,
        classNamePrefix,
        classNameLabel,
        classNameError = 'absolute -bottom-5 left-0 whitespace-nowrap text-sm',
        onSelect,
        controlStyle,
        placeholderStyle,
        inputStyle,
        singleValueStyle,
        isShowPlaceholder = false,
        colorIcon = '#0D0D0D',
        id,
        isFlag,
        isDropdownIcon = true,
        tooltip,
        isDefaultMenuIsOpen = false,
        tabIndex
    } = props

    const selectInputRef = useRef<SelectInstance>(null)

    const isMobile = useDisplay(1024)

    const isMounted = useMounted()

    const { field, fieldState } = useController({ name, control, defaultValue })

    useEffect(() => {
        if (selectInputRef.current && field.value === undefined) {
            selectInputRef.current.clearValue()
        }
    }, [field.value])

    const onChange = (selected: unknown | SelectOptionProps) => {
        field.onChange(selected)
        onSelect?.(selected as SelectOptionProps)
    }

    const loadIcon = (data: SelectOptionProps) =>
        !data.icon
            ? {}
            : {
                  alignItems: 'center',
                  display: 'flex',
                  ':before': {
                      content: '" "',
                      display: 'block',
                      marginRight: 8,
                      height: 18,
                      width: 24,
                      background: `url(${data.icon}) no-repeat 0 0 / contain`
                  }
              }

    const sharedStyles: Partial<StylesConfig> = {
        dropdownIndicator: (base, state) => ({
            ...base,
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
            transition: 'transform 0.2s ease-in-out',
            padding: '0',
            opacity: isDisabled ? 0 : 1,
            width: '14px',
            height: '7px'
        }),
        menu: (base) => ({ ...base, margin: 0, boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', zIndex: 9999 }),
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        menuList: (base) => ({ ...base, padding: '0 16px', overflowX: 'hidden' }),
        valueContainer: (base) => ({
            ...base,
            padding: 0,
            margin: 0,
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: '300'
        }),
        singleValue: (base, { data }) => {
            const optionData = data as SelectOptionProps

            return {
                ...base,
                ...loadIcon(optionData),
                overflow: 'visible',
                ':before': {
                    content: '" "',
                    display: optionData.icon ? 'block' : 'none',
                    marginRight: 8,
                    height: isFlag ? '14px' : '18px',
                    width: isFlag ? '20px' : '24px',
                    background: `url(${optionData.icon}) no-repeat 0 0 / contain`
                },
                ...singleValueStyle
            }
        },
        input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: '300',
            ...inputStyle
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        placeholder: (base) => ({
            ...base,
            color: '#6C757D',
            fontSize: isMobile ? '16px' : '20px',
            opacity: isShowPlaceholder ? 1 : 0,
            ...placeholderStyle
        })
    }

    const customStyles: StylesConfig = {
        ...sharedStyles,
        control: (base) => ({
            ...base,
            width: '100%',
            height: isMobile ? '44px' : '54px',
            paddingLeft: 16,
            paddingRight: 0,
            border: isErrors || fieldState.error ? '1px solid #C91F26' : '1px solid #DEE2E6',
            borderRadius: 2,
            backgroundColor: isDisabled ? 'var(--disable)' : 'white',
            outline: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s ease-in-out',
            ':hover': {
                border: isErrors || fieldState.error ? '1px solid #C91F26' : '1px solid #0A4245',
                boxShadow: '0px 4px 12px 0px rgba(135, 135, 135, 0.20)'
            },
            ...controlStyle
        }),
        option: (base, { isSelected }) => ({
            ...base,
            padding: '12px 0',
            color: isSelected ? '#C91F26' : '#0D0D0D',
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: '300',
            letterSpacing: '-0.02em',
            borderBottom: '1px solid #DEE2E6',
            backgroundColor: 'white',
            cursor: 'pointer',
            ':hover': {
                color: '#C91F26'
            },
            lineHeight: '1.2'
        })
    }

    const styles = customStyles

    return (
        <div className={cn('relative grid grid-cols-1 gap-2', className)}>
            {nameLabel && (
                <div className='flex gap-1 w-fit'>
                    <label
                        htmlFor={id}
                        className={cn(
                            'text-md lg:!text-xl font-bold text-black',
                            classNameLabel,
                            isRequired && 'label-required'
                        )}
                    >
                        {nameLabel}
                    </label>
                    {tooltip && <TooltipPopup {...tooltip} />}
                </div>
            )}
            {isMounted && (
                <Select
                    ref={selectInputRef as never}
                    classNamePrefix={classNamePrefix}
                    styles={styles}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isSearchable={isSearchable}
                    name={name}
                    options={option}
                    inputId={id}
                    required={isRequired}
                    onChange={onChange}
                    value={field.value}
                    onBlur={field.onBlur}
                    menuPortalTarget={document.body}
                    menuPosition='fixed'
                    components={{
                        DropdownIndicator: (props) =>
                            isDropdownIcon ? <DropdownIndicator colorIcon={colorIcon} {...props} /> : null,
                        Option: IconOption,
                        Input
                    }}
                    onInputChange={(value) => {
                        return value
                    }}
                    defaultMenuIsOpen={isDefaultMenuIsOpen}
                    tabIndex={tabIndex}
                />
            )}

            {fieldState.error && (
                <div
                    className={cn('text-error', classNameError)}
                    dangerouslySetInnerHTML={{ __html: fieldState.error.message as string }}
                />
            )}
        </div>
    )
}

const DropdownIndicator: React.FC<DropdownIndicatorProps & { colorIcon?: string }> = (props) => (
    <components.DropdownIndicator {...props}>
        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7' fill='none'>
            <path
                d='M11 1.01172L6 5.98912L1 1.01172'
                stroke={props?.colorIcon}
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    </components.DropdownIndicator>
)

const Input: React.FC<InputProps> = (props) => <components.Input {...props} autoComplete='off' />

const IconOption: React.FC<any> = (props) => (
    <components.Option {...props} className='!flex items-center gap-2'>
        {props.data.icon && (
            <Image
                width={20}
                height={14}
                src={props.data.icon}
                alt={props.data.label}
                title={props.data.label}
                style={{ width: '20px' }}
            />
        )}
        {props.data.label}
    </components.Option>
)
