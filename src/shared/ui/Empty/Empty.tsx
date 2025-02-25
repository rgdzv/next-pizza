'use client'
import { ArrowLeft, NotFound } from 'shared/assets'
import { CustomButton } from '../CustomButton/CustomButton'
import { CustomImage } from '../CustomImage/CustomImage'
import { CustomLink } from '../CustomLink/CustomLink'
import styles from './Empty.module.scss'
import type { FC } from 'react'

interface EmptyPropsInterface {
    name: string
    message: string
}

export const Empty: FC<EmptyPropsInterface> = ({ name, message }) => {
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className={styles.empty}>
            <div className={styles.empty__left}>
                <div className={styles.empty__left__header}>
                    <p className={styles.empty__left__header__reason}>{name}</p>
                    <p className={styles.empty__left__header__msg}>{message}</p>
                </div>
                <div className={styles.empty__left__footer}>
                    <CustomLink href="/" className="primary">
                        <ArrowLeft />
                        На главную
                    </CustomLink>
                    <CustomButton className="primary" onClick={handleReload}>
                        Обновить
                    </CustomButton>
                </div>
            </div>
            <div className={styles.empty__right}>
                <CustomImage
                    className="not__found"
                    src={NotFound}
                    alt="Not found"
                />
            </div>
        </div>
    )
}
