import { useTranslations } from 'next-intl'
import { SortPizzas, SwitchCategoryPizzas } from 'features/Pizzas/AllPizzas'
import styles from './Filters.module.scss'
import type { FC } from 'react'

export const Filters: FC = () => {
    const t = useTranslations('Filters')

    return (
        <div className={styles.filters} data-testid='filters'>
            <h1 className={styles.filtersTitle}>{t('H1')}</h1>
            <div className={styles.filtersContent}>
                <SwitchCategoryPizzas />
                <SortPizzas />
            </div>
        </div>
    )
}
