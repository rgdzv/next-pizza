import { CustomImage } from 'shared/ui'
import styles from './Logo.module.scss'
import type { FC } from 'react'

interface LogoPropsInterface {
    imgSrc: string
    name: string
    slogan: string
}

export const Logo: FC<LogoPropsInterface> = ({ imgSrc, name, slogan }) => {
    return (
        <div className={styles.logo}>
            <CustomImage src={imgSrc} className='logo' alt='Логотип' />
            <div className={styles.logoBlock}>
                <span className={styles.logoBlockName}>{name}</span>
                <span className={styles.logoBlockSlogan}>{slogan}</span>
            </div>
        </div>
    )
}
