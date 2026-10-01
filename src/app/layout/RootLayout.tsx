import '../styles/global.scss'
import { Providers } from 'features/Providers'
import type { FC, ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='ru' suppressHydrationWarning>
            <body>
                <Providers>
                    <div className='container'>{children}</div>
                </Providers>
            </body>
        </html>
    )
}
