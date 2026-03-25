import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import '../styles/global.scss'
import { ChosenPizzaStoreProvider } from 'features/Pizzas/ChosenPizza'
import type { FC, ReactNode } from 'react'

interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='ru'>
            <body>
                <PizzasStoreProvider>
                    <ChosenPizzaStoreProvider>
                        <div className='container'>{children}</div>
                    </ChosenPizzaStoreProvider>
                </PizzasStoreProvider>
            </body>
        </html>
    )
}
