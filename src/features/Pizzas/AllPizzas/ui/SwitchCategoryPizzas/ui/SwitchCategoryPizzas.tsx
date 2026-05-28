import { CustomButton } from 'shared/ui'
import { CATEGORIESLIST } from '../lib/const/categoriesList'
import { useCategory } from '../../../lib/hooks/useCategory'
import styles from './SwitchCategoryPizzas.module.scss'
import type { FC } from 'react'

export const SwitchCategoryPizzas: FC = () => {
    const { category, onChangeCategory } = useCategory()

    const categories = CATEGORIESLIST.map((item, ind) => {
        const onClick = () => {
            onChangeCategory(ind)
        }

        const categoryActive = category === ind

        return (
            <li key={item}>
                <CustomButton
                    className='category'
                    categoryActive={categoryActive}
                    onClick={onClick}
                >
                    {item}
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
