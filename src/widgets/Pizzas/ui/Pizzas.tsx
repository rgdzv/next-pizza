'use client'
import { useEffect } from 'react'
import classNames from 'classnames'
import { PizzaModal } from 'widgets/PizzaModal'
import { usePizzas } from 'features/Pizzas/AllPizzas'
import { useChosenPizza } from 'features/Pizzas/ChosenPizza'
import { PizzaCard, PizzaSize, PizzaType } from 'entities/PizzaCard'
import { priceFormat, useModal } from 'shared/lib'
import { CustomButton, Skeleton } from 'shared/ui'
import styles from './Pizzas.module.scss'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const { data, isLoading, error, hasMore, fetchData, fetchDataNextPage } =
        usePizzas()
    const { setChosenPizza } = useChosenPizza()
    const {
        isModalOpen,
        openModal,
        closeModal,
        dialogRef,
        onClickCloseButton,
        onClickOutside
    } = useModal()

    const pizzas = data?.map((pizza) => {
        const pizzaCardPrice = priceFormat(
            Number(
                pizza.details[PizzaType.TRADITIONAL][PizzaSize.EXTRA_SMALL]
                    .price
            )
        )

        const handleSelectPizza = () => {
            setChosenPizza(pizza)
            openModal()
        }

        return (
            <PizzaCard
                key={pizza.id}
                pizza={pizza}
                pizzaCardPrice={pizzaCardPrice}
                handleSelectPizza={handleSelectPizza}
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
            <PizzaModal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                dialogRef={dialogRef}
                onClickCloseButton={onClickCloseButton}
                onClickOutside={onClickOutside}
            />
        </main>
    )
}
