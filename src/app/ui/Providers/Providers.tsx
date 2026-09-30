'use client'
import { ThemeProvider } from 'next-themes'
import { PizzasStoreProvider } from 'features/Pizzas/AllPizzas'
import { ChosenPizzaStoreProvider } from 'features/Pizzas/ChosenPizza'
import { BasketPizzaStoreProvider } from 'features/Pizzas/BasketPizzas'
import type { FC, ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <PizzasStoreProvider>
            <ChosenPizzaStoreProvider>
                <BasketPizzaStoreProvider>
                    <ThemeProvider disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </BasketPizzaStoreProvider>
            </ChosenPizzaStoreProvider>
        </PizzasStoreProvider>
    )
}
