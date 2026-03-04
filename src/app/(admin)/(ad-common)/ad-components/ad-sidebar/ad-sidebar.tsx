'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BurgerIcon, ChevronLeftIcon } from '@icon'
import { PAGE_PATH } from '@constants'
import { cn } from '@libs/utils/cn'

const navItems = [
    { href: PAGE_PATH.DASHBOARD, label: 'Dashboard' }
    // Add more: { href: PAGE_PATH.REPORTS, label: 'Reports' }, etc.
]

type AdSidebarProps = {
    open: boolean
    onToggle: () => void
}

export function AdSidebar({ open, onToggle }: AdSidebarProps) {
    const pathname = usePathname()

    return (
        <aside
            className={cn(
                'flex shrink-0 flex-col border-r border-ad-gray-1 bg-white transition-[width] duration-200 ease-in-out',
                open ? 'w-64' : 'w-16'
            )}
        >
            <div
                className={cn(
                    'flex h-14 border-b border-ad-gray-1 px-3',
                    open ? 'items-center justify-between' : 'flex-col items-center justify-center gap-1'
                )}
            >
                {open && (
                    <Link href={PAGE_PATH.DASHBOARD} className='text-lg font-semibold text-ad-primary'>
                        Back Office
                    </Link>
                )}
                <button
                    type='button'
                    onClick={onToggle}
                    className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ad-black-1 hover:bg-ad-gray-3 hover:text-ad-primary'
                    aria-label={open ? 'Close sidebar' : 'Open sidebar'}
                >
                    {open ? <ChevronLeftIcon /> : <BurgerIcon />}
                </button>
            </div>
            <nav className='flex flex-1 flex-col gap-0.5 overflow-hidden p-3'>
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            title={!open ? item.label : undefined}
                            className={cn(
                                'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                                isActive
                                    ? 'bg-ad-primary/10 text-ad-primary'
                                    : 'text-ad-black-1 hover:bg-ad-gray-3 hover:text-ad-primary',
                                !open && 'flex items-center justify-center px-0 py-2.5'
                            )}
                        >
                            {open ? item.label : <span className='text-base'>{item.label.charAt(0)}</span>}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
