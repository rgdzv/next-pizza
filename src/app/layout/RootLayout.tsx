import { PizzasStoreProvider } from 'widgets/Pizzas'
import { FiltersStoreProvider } from 'widgets/Filters'
import '../styles/global.scss'
import type { FC, ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='ru'>
            <body>
                <FiltersStoreProvider>
                    <PizzasStoreProvider>{children}</PizzasStoreProvider>
                </FiltersStoreProvider>
            </body>
        </html>
    )
}
