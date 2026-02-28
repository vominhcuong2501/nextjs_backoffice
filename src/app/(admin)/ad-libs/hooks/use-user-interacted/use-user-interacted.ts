'use client'

import { useEffect, useState } from 'react'

export function useUserInteracted() {
    const [userInteracted, setUserInteracted] = useState(false)

    useEffect(() => {
        if (!userInteracted) {
            const onUserInteract = () => {
                setUserInteracted(true)
                // Remove the event listeners after the first interaction
                window.removeEventListener('scroll', onUserInteract)
                window.removeEventListener('mousemove', onUserInteract)
                window.removeEventListener('touchstart', onUserInteract)
            }

            // Add the event listeners
            window.addEventListener('scroll', onUserInteract)
            window.addEventListener('mousemove', onUserInteract)
            window.addEventListener('touchstart', onUserInteract)

            // Clean up the event listeners on unmount
            return () => {
                window.removeEventListener('scroll', onUserInteract)
                window.removeEventListener('mousemove', onUserInteract)
                window.removeEventListener('touchstart', onUserInteract)
            }
        }
    }, [userInteracted]) // Add userInteracted to the dependency array

    return userInteracted
}
