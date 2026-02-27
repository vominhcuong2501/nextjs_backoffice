/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'
import { useUserInteracted } from '@libs/hooks'

export const LazyIframe = ({ children, ...props }: any) => {
    const isInteracted = useUserInteracted()

    if (!isInteracted) {
        return (
            <div className='relative w-fit h-fit'>
                <Image {...props} src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`} alt='Loading...' />
                <div className='w-10 h-10 lg:!w-20 lg:!h-20 rounded-full border-2 border-white flex justify-center items-center absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='56'
                        height='57'
                        viewBox='0 0 56 57'
                        fill='none'
                        className='w-7 h-7 lg:!w-14 lg:!h-14'
                    >
                        <rect
                            opacity='0.01'
                            x='56'
                            y='56.4999'
                            width='56'
                            height='56'
                            transform='rotate(-180 56 56.4999)'
                            fill='white'
                        />
                        <path
                            d='M18.6666 38.3232L18.6666 18.6765C18.6643 17.0935 19.5721 15.6501 20.9999 14.9665C22.6935 14.1666 24.6949 14.402 26.1566 15.5732L38.0566 25.3965C38.9566 26.1765 39.4736 27.3089 39.4736 28.4998C39.4736 29.6908 38.9566 30.8232 38.0566 31.6032L26.1566 41.4265C24.6949 42.5977 22.6935 42.8331 20.9999 42.0332C19.5721 41.3496 18.6643 39.9062 18.6666 38.3232Z'
                            fill='white'
                        />
                    </svg>
                </div>
            </div>
        )
    }

    return (
        <iframe {...props} loading='lazy'>
            {children}
        </iframe>
    )
}
