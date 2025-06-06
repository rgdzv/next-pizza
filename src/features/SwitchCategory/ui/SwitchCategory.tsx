import { useState } from 'react'
import { CustomButton } from 'shared/ui'
import { categoriesNames } from '../lib/categoriesList'
import styles from './Categories.module.scss'
import type { FC } from 'react'

export const SwitchCategory: FC = () => {
    const [categoryID, setCategoryID] = useState(0)

    const handleChangeCategory = (ind: number) => {
        setCategoryID(ind)
    }

    const categories = categoriesNames.map((category, ind) => {
        const onClick = () => {
            handleChangeCategory(ind)
        }

        const active = categoryID === ind

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
