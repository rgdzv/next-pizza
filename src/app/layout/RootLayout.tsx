import '../styles/global.scss'
import type { FC, ReactNode } from 'react'
interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='ru' suppressHydrationWarning>
            <body>
                <div className='container'>{children}</div>
            </body>
        </html>
    )
}
