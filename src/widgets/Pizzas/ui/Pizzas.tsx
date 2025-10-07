'use client'
import { useEffect } from 'react'
import classNames from 'classnames'
import { useFiltersStore } from 'widgets/Filters/model/store/provider/filters-store-provider'
import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { CustomButton, Skeleton } from 'shared/ui'
import { usePizzasStore } from '../model/store/provider/pizzas-store-provider'
import { getPizzas } from '../model/store/selectors/getPizzas/getPizzas'
import { getIsLoading } from '../model/store/selectors/getIsLoading/getIsLoading'
import { getError } from '../model/store/selectors/getError/getError'
import { getHasMore } from '../model/store/selectors/getHasMore/getHasMore'
import { getFetchPizzas } from '../model/store/selectors/getFetchPizzas/getFetchPizzas'
import { getFetchPizzasNextPage } from '../model/store/selectors/getFetchPizzasNextPage/getFetchPizzasNextPage'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const data = usePizzasStore(getPizzas)
    const isLoading = usePizzasStore(getIsLoading)
    const error = usePizzasStore(getError)
    const hasMore = usePizzasStore(getHasMore)
    const fetchPizzas = usePizzasStore(getFetchPizzas)
    const fetchPizzasNextPage = usePizzasStore(getFetchPizzasNextPage)

    const categoryID = useFiltersStore((state) => state.categoryID) // <= change selector and import

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
        void fetchPizzasNextPage(categoryID)
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
        void fetchPizzas(categoryID)
    }, [fetchPizzas, categoryID])

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
