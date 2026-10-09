'use client'
import { Providers } from 'features/Providers'
import type { FC, ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return <Providers>{children}</Providers>
}
