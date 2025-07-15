import { useEffect } from 'react'
import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { Skeleton } from 'shared/ui'
import { usePizzasStore } from '../model/store/pizzas-store-provider'
import { getPizzas } from '../model/selectors/getPizzas/getPizzas'
import { getError } from '../model/selectors/getError/getError'
import { getFetchPizzas } from '../model/selectors/getFetchPizzas/getFetchPizzas'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const data = usePizzasStore(getPizzas)
    const error = usePizzasStore(getError)
    const fetchPizzas = usePizzasStore(getFetchPizzas)

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

    const pizzasCondition =
        pizzas && pizzas.length > 0 ? pizzas : pizzasSkeletons

    useEffect(() => {
        void fetchPizzas()
    }, [fetchPizzas])

    if (error) {
        return <main className={styles.error}>{error}</main>
    }

    if (!pizzas) {
        return <main className={styles.error}>Пиццы не найдены!</main>
    }

    return <main className={styles.pizzas}>{pizzasCondition}</main>
}
