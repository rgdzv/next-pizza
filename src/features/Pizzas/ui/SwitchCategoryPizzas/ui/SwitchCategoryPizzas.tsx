import { CustomButton } from 'shared/ui'
import { CATEGORIESLIST } from '../lib/const/categoriesList'
import { useFilters } from '../../../lib/hooks/useFilters'
import styles from './SwitchCategoryPizzas.module.scss'
import type { FC } from 'react'

export const SwitchCategoryPizzas: FC = () => {
    const { category, onChangeCategory } = useFilters()

    const categories = CATEGORIESLIST.map((categ, ind) => {
        const onClick = () => {
            onChangeCategory(ind)
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
