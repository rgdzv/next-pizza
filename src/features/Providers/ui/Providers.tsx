'use client'
import { ThemeProvider } from 'next-themes'
import { ChosenPizzaStoreProvider } from '../../Pizzas/ChosenPizza'
import { BasketPizzaStoreProvider } from '../../Pizzas/BasketPizzas'
import { PizzasStoreProvider } from '../../Pizzas/AllPizzas'
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
