import { useEffect, useState } from 'react'
import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { Skeleton } from 'shared/ui'
import { PIZZAS } from '../pizzas'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'
import type { Pizza } from 'entities/PizzaCard/lib/types/pizza'

export const Pizzas: FC = () => {
    const [example, setExample] = useState<Pizza[]>([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setIsError] = useState(null)

    const pizzas = example.map((pizza) => {
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

    const pizzasCondition = pizzas.length === 0 ? pizzasSkeletons : pizzas

    useEffect(() => {
        setTimeout(() => {
            setExample(PIZZAS)
        }, 300)
    }, [example])

    return <main className={styles.pizzas}>{pizzasCondition}</main>
}
