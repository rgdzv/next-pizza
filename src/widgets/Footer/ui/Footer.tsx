import { useState } from 'react'
import { CustomButton } from 'shared/ui'
import styles from './Footer.module.scss'
import type { FC } from 'react'

export const Footer: FC = () => {
    const [buttonName, setButtonName] = useState('Показать больше')

    const showMorePizzas = () => {
        setButtonName('Загрузка...')
        setTimeout(() => {
            setButtonName('Показать больше')
        }, 1300)
    }

    return (
        <footer className={styles.footer}>
            <CustomButton className='primary' onClick={showMorePizzas}>
                {buttonName}
            </CustomButton>
        </footer>
    )
}
