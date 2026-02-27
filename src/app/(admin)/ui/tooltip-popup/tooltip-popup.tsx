import { HTMLToReact } from '@components'
import { ToolTipIcon } from '@icon'
import { cn } from '@libs'

export interface TooltipPopupProps {
    content?: string
    position?: 'top' | 'bottom' | 'left' | 'right'
    className?: string
    small?: boolean
    children?: React.ReactNode
}

export const TooltipPopup = ({ content, position = 'top', className, children }: TooltipPopupProps) => {
    const positionPopup = {
        top: 'top-0 -translate-y-full',
        bottom: 'bottom-2 translate-y-full',
        left: 'left-0 top-full -translate-x-full -translate-y-1/2',
        right: 'right-0 top-full translate-x-full -translate-y-1/2'
    }

    const pointerPopup = {
        top: 'left-1/2 top-0 -translate-x-1/2 -translate-y-full border-l-[12px] border-l-transparent border-t-[18px] border-t-white border-r-[12px] border-r-transparent',
        bottom: 'left-1/2 bottom-1 -translate-x-1/2 translate-y-full border-l-[12px] border-l-transparent border-b-[18px] border-b-white border-r-[12px] border-r-transparent',
        left: 'left-0 top-full -translate-x-full -translate-y-full border-t-[12px] border-t-transparent border-l-[18px] border-l-white border-b-[12px] border-b-transparent',
        right: 'right-0 top-full translate-x-full -translate-y-full border-t-[12px] border-t-transparent border-r-[18px] border-r-white border-b-[12px] border-b-transparent'
    }

    return (
        <div className='relative group'>
            <ToolTipIcon className='cursor-help' />
            <div className={cn('group-hover:block hidden absolute drop-shadow', pointerPopup[position])}></div>
            <div
                className={cn(
                    'absolute z-[1] shadow-2 rounded-lg p-5 bg-white hidden group-hover:block -m-4 w-[358px] text-14 lg:!text-16 font-light',
                    positionPopup[position],
                    className
                )}
            >
                <HTMLToReact html={content || ''} />
                {children}
            </div>
        </div>
    )
}
