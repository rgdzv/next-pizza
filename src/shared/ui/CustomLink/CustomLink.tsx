import classNames from 'classnames'
import Link from 'next/link'
import styles from './CustomLink.module.scss'
import type { LinkClassNameType } from './lib/types/classNames'
import type { FC, ReactNode } from 'react'

interface CustomLinkPropsInterface {
    children: ReactNode
    className?: LinkClassNameType
    href: string
    disabled?: boolean
    onClick?: () => void
}

export const CustomLink: FC<CustomLinkPropsInterface> = ({
    children,
    className,
    href,
    disabled,
    onClick
}) => {
    const linkClassName = classNames(
        styles.link,
        {
            [styles.disabled]: disabled
        },
        styles[className as LinkClassNameType]
    )

    return (
        <Link href={href} className={linkClassName} onClick={onClick}>
            {children}
        </Link>
    )
}
