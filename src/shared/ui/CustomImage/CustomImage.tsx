import classNames from 'classnames'
import Image from 'next/image'
import styles from './CustomImage.module.scss'
import type { CustomImageClassNameType } from './lib/types/classNames'
import type { FC } from 'react'

interface CustomImagePropsInterface {
    src: string
    alt: string
    className: CustomImageClassNameType
}

export const CustomImage: FC<CustomImagePropsInterface> = ({
    src,
    alt,
    className
}) => {
    const wrapperClassName = styles[className]
    const imageClassName = classNames(styles.image)

    return (
        <div className={wrapperClassName}>
            <Image className={imageClassName} src={src} alt={alt} />
        </div>
    )
}
