import { ArrowLeft, NotFound } from 'shared/assets'
import { Button } from '../Button/Button'
import { CustomImage } from '../CustomImage/CustomImage'
import styles from './Empty.module.scss'
import type { FC } from 'react'

interface EmptyPropsInterface {
    name: string
    message: string
}

export const Empty: FC<EmptyPropsInterface> = ({ name, message }) => {
    return (
        <div className={styles.empty}>
            <div className={styles.empty__left}>
                <div className={styles.empty__left__header}>
                    <p className={styles.empty__left__header__reason}>{name}</p>
                    <p className={styles.empty__left__header__msg}>{message}</p>
                </div>
                <div className={styles.empty__left__footer}>
                    <Button className="primary">На главную</Button>
                    <Button className="primary">Обновить</Button>
                    <ArrowLeft />
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
