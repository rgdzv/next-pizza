import Image from 'next/image'
import styles from './CustomImage.module.scss'
import type { StaticImageData } from 'next/image'
import type { CustomImageVariantType } from '../lib/types/variants'
import type { FC } from 'react'

interface CustomImagePropsInterface {
    src: string | StaticImageData
    alt: string
    variant?: CustomImageVariantType
    sizes?: string
}

export const CustomImage: FC<CustomImagePropsInterface> = ({
    src,
    alt,
    variant,
    sizes
}) => {
    const wrapperClassName = variant && styles[variant]

    return (
        <div className={wrapperClassName} data-testid='image-wrapper'>
            <Image src={src} alt={alt} fill={true} sizes={sizes} />
        </div>
    )
}
