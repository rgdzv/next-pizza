import { useState, type FC } from 'react'
import { Categories } from 'features/Categories'
import styles from './Filters.module.scss'

export const Filters: FC = () => {
    const [categoryID, setCategoryID] = useState(0)

    const handleChangeCategory = (ind: number) => {
        setCategoryID(ind)
    }

    return (
        <div className={styles.filters}>
            <h1 className={styles.filtersTitle}>Все пиццы</h1>
            <Categories
                value={categoryID}
                handleChangeCategory={handleChangeCategory}
            />
        </div>
    )
}
