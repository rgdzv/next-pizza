import classNames from 'classnames'
import Link from 'next/link'
import styles from './CustomLink.module.scss'
import type { FC, ReactNode } from 'react'

type ClassNameType = 'primary'

interface CustomLinkPropsInterface {
    children: ReactNode
    className: string
    href: string
    disabled?: boolean
}

export const CustomLink: FC<CustomLinkPropsInterface> = ({
    children,
    className,
    href,
    disabled
}) => {
    const finalClassName = classNames(
        styles.link,
        {
            [styles.disabled]: disabled
        },
        styles[className as ClassNameType]
    )

    return (
        <Link href={href} className={finalClassName}>
            {children}
        </Link>
    )
}
