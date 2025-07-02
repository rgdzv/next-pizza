import styles from './Skeleton.module.scss'
import type { SkeletonClassNameType } from '../lib/types/classNames'
import type { FC } from 'react'

interface SkeletonPropsInterface {
    className: SkeletonClassNameType
}

export const Skeleton: FC<SkeletonPropsInterface> = ({ className }) => {
    const finalClassName = styles[className]

    return (
        <div className={finalClassName}>
            <div className={styles.image}></div>
            <div className={styles.title}></div>
            <div className={styles.description}></div>
            <div className={styles.footer}></div>
        </div>
    )
}
