import { useState } from 'react'
import { CustomButton } from 'shared/ui'
import { CATEGORIESLIST } from '../lib/const/categoriesList'
import styles from './SwitchCategoryPizzas.module.scss'
import type { FC } from 'react'

export const SwitchCategoryPizzas: FC = () => {
    const [categoryID, setCategoryID] = useState(0)

    const handleChangeCategory = (ind: number) => {
        setCategoryID(ind)
    }

    const categories = CATEGORIESLIST.map((category, ind) => {
        const onClick = () => {
            handleChangeCategory(ind)
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
