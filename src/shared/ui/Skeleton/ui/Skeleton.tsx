import styles from './Skeleton.module.scss'
import type { SkeletonVariantType } from '../lib/types/variants'
import type { FC } from 'react'

interface SkeletonPropsInterface {
    variant: SkeletonVariantType
}

export const Skeleton: FC<SkeletonPropsInterface> = ({ variant }) => {
    const finalClassName = styles[variant]

    if (variant === 'pizzaCardSkeleton') {
        return (
            <div className={finalClassName} data-testid='skeleton'>
                <div className={styles.image}></div>
                <div className={styles.title}></div>
                <div className={styles.rating}></div>
                <div className={styles.description}></div>
                <div className={styles.footer}></div>
            </div>
        )
    }

    return <div className={finalClassName} data-testid='skeleton'></div>
}
