import { PizzasStoreProvider } from 'features/Pizzas/AllPizzasInteract'
import '../styles/global.scss'
import type { FC, ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='ru'>
            <body>
                <PizzasStoreProvider>
                    <div className='container'>{children}</div>
                </PizzasStoreProvider>
            </body>
        </html>
    )
}
