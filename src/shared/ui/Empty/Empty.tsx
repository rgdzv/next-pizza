import Image from 'next/image'
import { ArrowLeft } from 'shared/assets'
import { Button } from '../Button/Button'
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
                    <Image
                        priority
                        className={styles.image}
                        src="/images/arrow-left-icon.svg"
                        alt="Go home"
                        width={16}
                        height={16}
                        objectFit="cover"
                    />
                    <ArrowLeft />
                </div>
            </div>
            <div className={styles.empty__right}>
                <div
                    style={{
                        width: '340px',
                        height: '340px',
                        backgroundColor: 'grey'
                    }}
                />
            </div>
        </div>
    )
}
