import { SwitchCategoryPizzas } from 'features/Pizzas/SwitchCategoryPizzas'
import { SortPizzas } from 'features/Pizzas/SortPizzas'
import { useFiltersStore } from '../model/store/provider/filters-store-provider'
import { getCategoryID } from '../model/store/selectors/getCategoryID/getCategoryID'
import { getSetCategoryID } from '../model/store/selectors/getSetCategoryID/getSetCategoryID'
import styles from './Filters.module.scss'
import type { FC } from 'react'

export const Filters: FC = () => {
    const categoryID = useFiltersStore(getCategoryID)
    const setCategoryID = useFiltersStore(getSetCategoryID)

    return (
        <div className={styles.filters}>
            <h1 className={styles.filtersTitle}>Все пиццы</h1>
            <div className={styles.filtersContent}>
                <SwitchCategoryPizzas
                    categoryID={categoryID}
                    setCategoryID={setCategoryID}
                />
                <SortPizzas />
            </div>
        </div>
    )
}
