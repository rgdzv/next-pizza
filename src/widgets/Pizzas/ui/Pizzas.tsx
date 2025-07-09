import { useEffect } from 'react'
import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { Skeleton } from 'shared/ui'
import { usePizzasStore } from '../model/store/pizzas-store-provider'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const data = usePizzasStore((state) => state.pizzas)
    const isLoading = usePizzasStore((state) => state.isLoading)
    const error = usePizzasStore((state) => state.error)
    const fetchPizzas = usePizzasStore((state) => state.fetchPizzas)

    const pizzas = data?.map((pizza) => {
        const pizzaCardPrice = priceFormat(Number(pizza.price[0]))

        return (
            <PizzaCard
                key={pizza.id}
                pizza={pizza}
                pizzaCardPrice={pizzaCardPrice}
            />
        )
    })

    const pizzasSkeletons = new Array(8)
        .fill(0)
        .map((_, index) => (
            <Skeleton key={index} className='pizzaCardSkeleton' />
        ))

    useEffect(() => {
        void fetchPizzas()
    }, [fetchPizzas])

    if (error) {
        return <main className={styles.error}>{error}</main>
    }

    if (isLoading) {
        return <main className={styles.pizzas}>{pizzasSkeletons}</main>
    }

    return <main className={styles.pizzas}>{pizzas}</main>
}
