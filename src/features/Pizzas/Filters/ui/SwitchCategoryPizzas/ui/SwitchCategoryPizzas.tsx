import { CustomButton } from 'shared/ui'
import { CATEGORIESLIST } from '../lib/const/categoriesList'
import { useFiltersStore } from '../../../model/store/provider/filters-store-provider'
import { getCategory } from '../../../model/store/selectors/getCategory/getCategory'
import { setCategory } from '../../../model/store/selectors/setCategory/setCategory'
import styles from './SwitchCategoryPizzas.module.scss'
import type { FC } from 'react'

export const SwitchCategoryPizzas: FC = () => {
    const category = useFiltersStore(getCategory)
    const handleCategory = useFiltersStore(setCategory)

    const categories = CATEGORIESLIST.map((categ, ind) => {
        const onClick = () => {
            handleCategory(ind)
        }

        const categoryActive = category === ind

        return (
            <li key={categ}>
                <CustomButton
                    className='category'
                    categoryActive={categoryActive}
                    onClick={onClick}
                >
                    {categ}
                </CustomButton>
            </li>
        )
    })

    return (
        <div className={styles.categories}>
            <ul>{categories}</ul>
        </div>
    )
}
