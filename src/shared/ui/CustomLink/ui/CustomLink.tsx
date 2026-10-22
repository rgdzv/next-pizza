import classNames from 'classnames'
import Link from 'next/link'
import styles from './CustomLink.module.scss'
import type { LinkVariantType } from '../lib/types/variants'
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react'

interface CustomLinkPropsInterface
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    children: ReactNode
    variant?: LinkVariantType
    href: string
}

export const CustomLink: FC<CustomLinkPropsInterface> = ({
    children,
    variant,
    href,
    ...otherProps
}) => {
    const linkClassName = classNames(styles.link, variant && styles[variant])

    return (
        <Link href={href} className={linkClassName} {...otherProps}>
            {children}
        </Link>
    )
}
