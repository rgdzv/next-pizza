import { PizzasStoreProvider } from 'widgets/Pizzas/model/store/provider/pizzas-store-provider'
import '../styles/global.scss'
import type { FC, ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='ru'>
            <body>
                <PizzasStoreProvider>{children}</PizzasStoreProvider>
            </body>
        </html>
    )
}
