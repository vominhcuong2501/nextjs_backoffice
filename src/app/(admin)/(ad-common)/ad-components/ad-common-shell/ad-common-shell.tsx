'use client'

import { useState, type ReactNode } from 'react'
import { AdSidebar } from '../ad-sidebar'

export function AdCommonShell({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className='flex min-h-screen'>
            <AdSidebar open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
            <main className='min-w-0 flex-1 bg-ad-gray-3 p-6'>{children}</main>
        </div>
    )
}
