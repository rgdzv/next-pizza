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
                <PizzasStoreProvider>
                    <ChosenPizzaStoreProvider>
                        <BasketPizzaStoreProvider>
                            <ThemeProvider disableTransitionOnChange>
                                <div className='container'>{children}</div>
                            </ThemeProvider>
                        </BasketPizzaStoreProvider>
                    </ChosenPizzaStoreProvider>
                </PizzasStoreProvider>
            </body>
        </html>
    )
}
