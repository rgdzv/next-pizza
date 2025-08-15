import Image from 'next/image'
import styles from './CustomImage.module.scss'
import type { StaticImageData } from 'next/image'
import type { CustomImageClassNameType } from '../lib/types/classNames'
import type { FC } from 'react'

interface CustomImagePropsInterface {
    src: string | StaticImageData
    alt: string
    className: CustomImageClassNameType
}

export const CustomImage: FC<CustomImagePropsInterface> = ({
    src,
    alt,
    className
}) => {
    const wrapperClassName = styles[className]

    return (
        <div className={wrapperClassName}>
            <Image src={src} alt={alt} fill={true} />
        </div>
    )
}
