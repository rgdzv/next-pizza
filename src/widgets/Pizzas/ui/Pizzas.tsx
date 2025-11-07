'use client'
import { useEffect } from 'react'
import classNames from 'classnames'
import {
    getError,
    getHasMore,
    getIsLoading,
    getPizzas,
    useFilters,
    usePizzasStore
} from 'features/Pizzas'
import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { CustomButton, Skeleton } from 'shared/ui'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const data = usePizzasStore(getPizzas)
    const isLoading = usePizzasStore(getIsLoading)
    const error = usePizzasStore(getError)
    const hasMore = usePizzasStore(getHasMore)
    const { fetchData, fetchDataNextPage } = useFilters()

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

    const handleNextPage = () => {
        fetchDataNextPage()
    }

    const pizzasFetchButtonCondition = hasMore && (
        <div className={styles.pizzasFetchButton}>
            <CustomButton
                className='primary'
                onClick={handleNextPage}
                disabled={isLoading}
            >
                {isLoading ? 'Загрузка...' : 'Показать больше'}
            </CustomButton>
        </div>
    )

    const pizzasClassName = classNames(styles.pizzas, {
        [styles.noPizzasLeft]: !hasMore
    })

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (isLoading) {
        return (
            <main className={pizzasClassName}>
                <div className={styles.pizzasContent}>{pizzasSkeletons}</div>
                {pizzasFetchButtonCondition}
            </main>
        )
    }

    if (error) {
        return <main className={styles.error}>{error}</main>
    }

    if (!pizzas?.length) {
        return <main className={styles.error}>Пиццы не найдены!</main>
    }

    return (
        <main className={pizzasClassName}>
            <div className={styles.pizzasContent}>{pizzas}</div>
            {pizzasFetchButtonCondition}
        </main>
    )
}
