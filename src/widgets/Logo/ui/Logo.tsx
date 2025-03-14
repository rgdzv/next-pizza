import { CustomImage } from 'shared/ui'
import { PizzaLogoIcon } from 'shared/assets'
import styles from './Logo.module.scss'
import type { FC } from 'react'

interface LogoPropsInterface {
    name: string
    slogan: string
}

export const Logo: FC<LogoPropsInterface> = ({ name, slogan }) => {
    return (
        <div className={styles.logo}>
            <CustomImage
                src={PizzaLogoIcon}
                className='logo'
                alt='Логотип пиццы'
            />
            <div className={styles.logo__block}>
                <span className={styles.logo__block__name}>{name}</span>
                <span className={styles.logo__block__slogan}>{slogan}</span>
            </div>
        </div>
    )
}
