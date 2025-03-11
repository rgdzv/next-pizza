'use client'
import { ArrowLeft } from 'shared/assets'
import { CustomButton } from '../CustomButton/CustomButton'
import { CustomImage } from '../CustomImage/CustomImage'
import { CustomLink } from '../CustomLink/CustomLink'
import styles from './NoContent.module.scss'
import type { FC } from 'react'

interface NoContentPropsInterface {
    name: string
    message: string
    imgSrc: string
    imgClassName: string
    imgAlt: string
}

export const NoContent: FC<NoContentPropsInterface> = ({
    name,
    message,
    imgSrc,
    imgClassName,
    imgAlt
}) => {
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className={styles.nocontent}>
            <div className={styles.nocontent__left}>
                <div className={styles.nocontent__left__header}>
                    <p className={styles.nocontent__left__header__reason}>
                        {name}
                    </p>
                    <p className={styles.nocontent__left__header__msg}>
                        {message}
                    </p>
                </div>
                <div className={styles.nocontent__left__footer}>
                    <CustomLink href='/' className='primary'>
                        <ArrowLeft />
                        <span>На главную</span>
                    </CustomLink>
                    <CustomButton className='primary' onClick={handleReload}>
                        Обновить
                    </CustomButton>
                </div>
            </div>
            <div className={styles.nocontent__right}>
                <CustomImage
                    className={imgClassName}
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
        </div>
    )
}
