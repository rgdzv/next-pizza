'use client'
import { ArrowLeftIcon } from 'shared/assets'
import { CustomButton, CustomImage, CustomLink } from 'shared/ui'
import styles from './NoContent.module.scss'
import type { FC } from 'react'

interface NoContentPropsInterface {
    name: string
    message: string
    imgSrc: string
}

export const NoContent: FC<NoContentPropsInterface> = ({
    name,
    message,
    imgSrc
}) => {
    const handleReload = () => {
        window.location.reload()
    }

    return (
        <div className={styles.noContent}>
            <div className={styles.noContentLeft}>
                <div className={styles.noContentLeftHeader}>
                    <p className={styles.noContentLeftHeaderReason}>{name}</p>
                    <p className={styles.noContentLeftHeaderMsg}>{message}</p>
                </div>
                <div className={styles.noContentLeftFooter}>
                    <CustomLink href='/' className='primary'>
                        <ArrowLeftIcon title='Влево' />
                        <span>На главную</span>
                    </CustomLink>
                    <CustomButton className='primary' onClick={handleReload}>
                        Обновить
                    </CustomButton>
                </div>
            </div>
            <div className={styles.noContentRight}>
                <CustomImage
                    className='notFound'
                    src={imgSrc}
                    alt='Не найдено'
                />
            </div>
        </div>
    )
}
