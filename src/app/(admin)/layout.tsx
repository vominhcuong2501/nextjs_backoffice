import type { Viewport } from 'next'
import { type ReactNode } from 'react'
import AdCommonStyles from '@libs/styles/ad-common.module.css'
import AdButtonStyles from '@libs/styles/ad-button.module.css'
import { Roboto } from 'next/font/google'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
}

const roboto = Roboto({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--roboto',
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en' className={`${roboto.variable} `} style={{ scrollBehavior: 'smooth' }}>
            <body className={`${AdCommonStyles.body} leading-1-4 ${AdButtonStyles.AdButtonEffect}`}>{children}</body>
        </html>
    )
}
