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
        <html lang='ru' data-theme='dark'>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`
                    }}
                />
            </head>
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
