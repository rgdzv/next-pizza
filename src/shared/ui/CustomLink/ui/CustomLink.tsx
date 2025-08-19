import classNames from 'classnames'
import Link from 'next/link'
import styles from './CustomLink.module.scss'
import type { LinkClassNameType } from '../lib/types/classNames'
import type { FC, ReactNode, KeyboardEvent } from 'react'

interface CustomLinkPropsInterface {
    children: ReactNode
    className?: LinkClassNameType
    href: string
    disabled?: boolean
    onClick?: () => void
    onKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>) => void
}

export const CustomLink: FC<CustomLinkPropsInterface> = ({
    children,
    className,
    href,
    disabled,
    onClick,
    onKeyDown
}) => {
    const linkClassName = classNames(
        styles.link,
        styles[className as LinkClassNameType],
        {
            [styles.disabled]: disabled
        }
    )

    return (
        <Link
            href={href}
            className={linkClassName}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            {children}
        </Link>
    )
}
