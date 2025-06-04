import { CustomButton } from 'shared/ui'
import { categoriesNames } from '../lib/categoriesList'
import styles from './Categories.module.scss'
import type { FC } from 'react'

interface CategoriesPropsInterface {
    value: number
    handleChangeCategory: (ind: number) => void
}

export const Categories: FC<CategoriesPropsInterface> = ({
    value,
    handleChangeCategory
}) => {
    const categories = categoriesNames.map((category, ind) => {
        const onClick = () => {
            handleChangeCategory(ind)
        }

        const active = value === ind

        return (
            <li key={category}>
                <CustomButton
                    className='category'
                    active={active}
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
