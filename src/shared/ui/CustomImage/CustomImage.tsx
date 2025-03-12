import classNames from 'classnames'
import Image from 'next/image'
import styles from './CustomImage.module.scss'
import type { StaticImageData } from 'next/image'
import type { FC } from 'react'

type ClassNameType = 'not__found' | 'logo' | 'mini'

interface CustomImagePropsInterface {
    src: string | StaticImageData
    alt: string
    className: string
}

export const CustomImage: FC<CustomImagePropsInterface> = ({
    src,
    alt,
    className
}) => {
    const classNameFinal = styles[className as ClassNameType]
    const imageClassNameFinal = classNames(styles.image)

    return (
        <div className={classNameFinal}>
            <Image className={imageClassNameFinal} src={src} alt={alt} />
        </div>
    )
}
