import { SwitchCategoryPizzas } from 'features/Pizzas/SwitchCategoryPizzas'
import { SortPizzas } from 'features/Pizzas/SortPizzas'
import { useFiltersStore } from '../model/store/provider/filters-store-provider'
import { getCategoryID } from '../model/store/selectors/getCategoryID/getCategoryID'
import { getSetCategoryID } from '../model/store/selectors/getSetCategoryID/getSetCategoryID'
import { getSortingObj } from '../model/store/selectors/getSortingObj/getSortingObj'
import { getSetSortingObj } from '../model/store/selectors/getSetSortingObj/getSetSortingObj'
import styles from './Filters.module.scss'
import type { FC } from 'react'

export const Filters: FC = () => {
    const categoryID = useFiltersStore(getCategoryID)
    const setCategoryID = useFiltersStore(getSetCategoryID)
    const sortingObj = useFiltersStore(getSortingObj)
    const setSortingObj = useFiltersStore(getSetSortingObj)

    return (
        <div className={styles.filters}>
            <h1 className={styles.filtersTitle}>Все пиццы</h1>
            <div className={styles.filtersContent}>
                <SwitchCategoryPizzas
                    categoryID={categoryID}
                    setCategoryID={setCategoryID}
                />
                <SortPizzas
                    sortingObj={sortingObj}
                    setSortingObj={setSortingObj}
                />
            </div>
        </div>
    )
}
