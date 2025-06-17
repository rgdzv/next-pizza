import { PizzaCard } from 'entities/PizzaCard'
import { PIZZAS } from '../pizzas'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const pizzas = PIZZAS.map((pizza) => {
        return <PizzaCard key={pizza.id} pizza={pizza} />
    })

    return <main className={styles.pizzas}>{pizzas}</main>
}
