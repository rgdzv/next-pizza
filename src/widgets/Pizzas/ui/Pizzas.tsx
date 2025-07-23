import { useEffect } from 'react'
import { PizzaCard } from 'entities/PizzaCard'
import { priceFormat } from 'shared/lib'
import { CustomButton, Skeleton } from 'shared/ui'
import { usePizzasStore } from '../model/store/pizzas-store-provider'
import { getPizzas } from '../model/selectors/getPizzas/getPizzas'
import { getError } from '../model/selectors/getError/getError'
import { getFetchPizzas } from '../model/selectors/getFetchPizzas/getFetchPizzas'
import { getIsLoading } from '../model/selectors/getIsLoading/getIsLoading'
import { getFetchPizzasNextPage } from '../model/selectors/getFetchPizzasNextPage/getFetchPizzasNextPage'
import { getHasMore } from '../model/selectors/getHasMore/getHasMore'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const data = usePizzasStore(getPizzas)
    const isLoading = usePizzasStore(getIsLoading)
    const error = usePizzasStore(getError)
    const hasMore = usePizzasStore(getHasMore)
    const fetchPizzas = usePizzasStore(getFetchPizzas)
    const fetchPizzasNextPage = usePizzasStore(getFetchPizzasNextPage)

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

    const buttonNameCondition = isLoading ? 'Загрузка...' : 'Показать больше'

    const pizzasFetchButtonCondition = hasMore && (
        <div className={styles.pizzasFetchButton}>
            <CustomButton
                className='primary'
                onClick={fetchPizzasNextPage}
                disabled={isLoading}
            >
                {buttonNameCondition}
            </CustomButton>
        </div>
    )

    useEffect(() => {
        void fetchPizzas()
    }, [fetchPizzas])

    if (error) {
        return <main className={styles.error}>{error}</main>
    }

    if (!isLoading && !pizzas) {
        return <main className={styles.error}>Пиццы не найдены!</main>
    }

    return (
        <main
            className={styles.pizzas}
            style={{ rowGap: hasMore ? '45px' : '0' }}
        >
            <div className={styles.pizzasContent}>{pizzasCondition}</div>
            {pizzasFetchButtonCondition}
        </main>
    )
}
