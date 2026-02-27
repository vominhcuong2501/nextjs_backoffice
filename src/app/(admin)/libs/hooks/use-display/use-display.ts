'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from 'react'
import { useClient } from '../use-client'

const throttle = (func: (...args: any[]) => void, limit: number) => {
    let lastFunc: NodeJS.Timeout
    let lastRan: number

    return (...args: any[]) => {
        const context = this

        if (!lastRan) {
            func.apply(context, args)
            lastRan = Date.now()
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(
                () => {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(context, args)
                        lastRan = Date.now()
                    }
                },
                limit - (Date.now() - lastRan)
            )
        }
    }
}

export const useDisplay = (param?: number) => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const isClient = useClient()
    const innerWidth = useRef(typeof window !== 'undefined' ? window.innerWidth : 0)

    const handleResize = useCallback(
        throttle(() => {
            if (typeof window !== 'undefined') {
                innerWidth.current = window.innerWidth
                setIsMobile(innerWidth.current < (param ?? 1280))
            }
        }, 200),
        [param]
    )

    useEffect(() => {
        if (typeof window !== 'undefined') {
            handleResize()

            window.addEventListener('resize', handleResize)

            return () => window.removeEventListener('resize', handleResize)
        }
    }, [handleResize, isClient])

    return isMobile
}
