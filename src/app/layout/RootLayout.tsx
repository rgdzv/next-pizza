import { ThemeProvider } from 'next-themes'
import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import { ChosenPizzaStoreProvider } from 'features/Pizzas/ChosenPizza'
import { BasketPizzaStoreProvider } from 'features/Pizzas/BasketPizzas'
import '../styles/global.scss'
import type { FC, ReactNode } from 'react'
interface RootLayoutProps {
    children: ReactNode
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='ru' suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <PizzasStoreProvider>
                        <ChosenPizzaStoreProvider>
                            <BasketPizzaStoreProvider>
                                <div className='container'>{children}</div>
                            </BasketPizzaStoreProvider>
                        </ChosenPizzaStoreProvider>
                    </PizzasStoreProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
