import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { PIZZAS } from '../pizzas'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const pizzas = PIZZAS.map((pizza) => {
        const pizzaCardPrice = priceFormat(Number(pizza.price[0][0]))

        return (
            <PizzaCard
                key={pizza.id}
                pizza={pizza}
                pizzaCardPrice={pizzaCardPrice}
            />
        )
    })

    return <main className={styles.pizzas}>{pizzas}</main>
}
