/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useUserInteracted } from '@libs/hooks'
import { motion } from 'motion/react'
import React from 'react'

const effectVariants = {
    none: {},
    fadeIn: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInUp: {
        initial: { y: 20, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInFormLeft: {
        initial: { x: -50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    },
    fadeInFormRight: {
        initial: { x: 50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: true }
    }
}

export type MotionEffects = keyof typeof effectVariants

export const Motion = ({
    tag = 'div',
    effect = 'none',
    children,
    ...props
}: {
    tag?: string
    effect?: MotionEffects | 'none'
    children?: React.ReactNode
    [key: string]: any
}) => {
    const isInteracted = useUserInteracted()

    const MotionTag = (motion[tag as keyof typeof motion] || motion.div) as React.ElementType

    const effectProps = effectVariants[effect as MotionEffects] || {}

    if (!isInteracted) {
        return React.createElement(tag, props, children)
    }

    return (
        <MotionTag {...effectProps} {...props}>
            {children}
        </MotionTag>
    )
}
