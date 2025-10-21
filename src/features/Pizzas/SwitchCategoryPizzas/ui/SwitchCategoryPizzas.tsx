import { CustomButton } from 'shared/ui'
import { CATEGORIESLIST } from '../lib/const/categoriesList'
import styles from './SwitchCategoryPizzas.module.scss'
import type { FC } from 'react'

interface SwitchCategoryPizzasPropsInterface {
    categoryID: number
    setCategoryID: (ind: number) => void
}

export const SwitchCategoryPizzas: FC<SwitchCategoryPizzasPropsInterface> = ({
    categoryID,
    setCategoryID
}) => {
    const categories = CATEGORIESLIST.map((category, ind) => {
        const onClick = () => {
            setCategoryID(ind)
        }

        const categoryActive = categoryID === ind

        return (
            <li key={category}>
                <CustomButton
                    className='category'
                    categoryActive={categoryActive}
                    onClick={onClick}
                >
                    {category}
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
