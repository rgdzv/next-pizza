'use client'
import { useCallback, useEffect, useState } from 'react'
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
import { priceFormat, useModal } from 'shared/lib'
import { CustomButton, Dialog, Skeleton } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
import styles from './Pizzas.module.scss'
import type { Pizza } from 'entities/PizzaCard'
import type { FC } from 'react'

export const Pizzas: FC = () => {
    const data = usePizzasStore(getPizzas)
    const isLoading = usePizzasStore(getIsLoading)
    const error = usePizzasStore(getError)
    const hasMore = usePizzasStore(getHasMore)
    const { fetchData, fetchDataNextPage } = useFilters()
    const {
        isModalOpen,
        openModal,
        closeModal,
        dialogRef,
        onClickCloseButton,
        onClickOutside
    } = useModal()
    const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null)

    const handleSelectPizza = useCallback(
        (pizza: Pizza) => {
            openModal()
            setSelectedPizza(pizza)
        },
        [openModal]
    )
    console.log(selectedPizza)

    const pizzas = data?.map((pizza) => {
        const pizzaCardPrice = priceFormat(Number(pizza.price[0]))

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

    const modalWithPizzaCondition = isModalOpen && (
        <Dialog
            dialogRef={dialogRef}
            onClose={closeModal}
            onClick={onClickOutside}
            className='pizzaModal'
        >
            <div
                style={{ width: '100%', height: '100%', position: 'relative' }}
            >
                <CustomButton
                    className='closeModal'
                    onClick={onClickCloseButton}
                >
                    <CrossIcon title='Закрыть окно' />
                </CustomButton>
            </div>
        </Dialog>
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
            {modalWithPizzaCondition}
        </main>
    )
}
