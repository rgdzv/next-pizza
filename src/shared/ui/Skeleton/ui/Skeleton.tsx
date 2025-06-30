import styles from './Skeleton.module.scss'
import type { SkeletonType } from '../lib/types/types'
import type { FC } from 'react'

interface SkeletonPropsInterface {
    type?: SkeletonType
}

export const Skeleton: FC<SkeletonPropsInterface> = ({ type }) => {
    if (type === 'pizzaCardSkeleton') {
        return (
            <div className={styles.pizzaCardSkeleton}>
                <div className={styles.image}></div>
                <div className={styles.title}></div>
                <div className={styles.description}></div>
                <div className={styles.footer}></div>
            </div>
        )
    }
}
