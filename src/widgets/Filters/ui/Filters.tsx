import { SwitchCategory } from 'features/SwitchCategory'
import { SortPizzas } from 'features/SortPizzas'
import styles from './Filters.module.scss'
import type { FC } from 'react'

export const Filters: FC = () => {
    return (
        <div className={styles.filters}>
            <h1 className={styles.filtersTitle}>Все пиццы</h1>
            <div className={styles.filtersContent}>
                <SwitchCategory />
                <SortPizzas />
            </div>
        </div>
    )
}
