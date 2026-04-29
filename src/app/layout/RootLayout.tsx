import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import '../styles/global.scss'
import { ChosenPizzaStoreProvider } from 'features/Pizzas/ChosenPizza'
import { BasketPizzaStoreProvider } from 'features/Pizzas/BasketPizzas'
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
                        <BasketPizzaStoreProvider>
                            <div className='container'>{children}</div>
                        </BasketPizzaStoreProvider>
                    </ChosenPizzaStoreProvider>
                </PizzasStoreProvider>
            </body>
        </html>
    )
}
