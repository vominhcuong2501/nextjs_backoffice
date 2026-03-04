import type { ReactNode } from 'react'
import { AdCommonShell } from './ad-components/ad-common-shell'

export default function AdCommonLayout({ children }: { children: ReactNode }) {
    return <AdCommonShell>{children}</AdCommonShell>
}
