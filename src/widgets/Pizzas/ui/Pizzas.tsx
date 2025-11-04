'use client'
import { useEffect } from 'react'
import classNames from 'classnames'
import {
    getCategory,
    getSearchValue,
    getSortingObj,
    useFiltersStore
} from 'features/Pizzas/Filters'
import {
    getError,
    getFetchPizzas,
    getFetchPizzasNextPage,
    getHasMore,
    getIsLoading,
    getPizzas,
    usePizzasStore
} from 'features/Pizzas/Fetch'
import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { CustomButton, Skeleton } from 'shared/ui'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const data = usePizzasStore(getPizzas)
    const isLoading = usePizzasStore(getIsLoading)
    const error = usePizzasStore(getError)
    const fetchPizzas = usePizzasStore(getFetchPizzas)
    const fetchPizzasNextPage = usePizzasStore(getFetchPizzasNextPage)
    const hasMore = usePizzasStore(getHasMore)
    const searchValue = useFiltersStore(getSearchValue)
    const category = useFiltersStore(getCategory)
    const { order, sortProperty } = useFiltersStore(getSortingObj)

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
        void fetchPizzasNextPage({
            searchValue,
            category,
            sortProperty,
            order
        })
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
        void fetchPizzas({ category, sortProperty, order, searchValue })
    }, [fetchPizzas, category, sortProperty, order, searchValue])

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
