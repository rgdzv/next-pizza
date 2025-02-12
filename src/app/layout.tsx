import type { FC, ReactNode } from 'react'
import './styles/global.scss'

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
