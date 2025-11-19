import classNames from 'classnames'
import styles from './Dialog.module.scss'
import type { DialogClassNameType } from '../lib/types/classNames'
import type { FC, MouseEvent, ReactNode, RefObject } from 'react'

interface DialogPropsInterface {
    children: ReactNode
    dialogRef: RefObject<HTMLDialogElement | null>
    className?: DialogClassNameType
    onClick: (e: MouseEvent<HTMLDialogElement>) => void
}

export const Dialog: FC<DialogPropsInterface> = ({
    children,
    dialogRef,
    className,
    onClick
}) => {
    const dialogClassName = classNames(
        styles.dialog,
        styles[className as DialogClassNameType]
    )

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <dialog ref={dialogRef} className={dialogClassName} onClick={onClick}>
            {children}
        </dialog>
    )
}
