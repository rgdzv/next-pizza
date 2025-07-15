import { usePizzasStore } from 'widgets/Pizzas/model/store/pizzas-store-provider'
import { CustomButton } from 'shared/ui'
import styles from './Footer.module.scss'
import type { FC } from 'react'

export const Footer: FC = () => {
    const isLoading = usePizzasStore((state) => state.isLoading)
    const fetchPizzas = usePizzasStore((state) => state.fetchPizzasNextPage)

    const buttonNameCondition = isLoading ? 'Загрузка...' : 'Показать больше'

    return (
        <footer className={styles.footer}>
            <CustomButton
                className='primary'
                onClick={fetchPizzas}
                disabled={isLoading}
            >
                {buttonNameCondition}
            </CustomButton>
        </footer>
    )
}
