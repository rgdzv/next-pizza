import classNames from 'classnames'
import styles from './Dialog.module.scss'
import type { DialogClassNameType } from './lib/types/classNames'
import type { FC, ReactNode, RefObject } from 'react'

interface DialogPropsInterface {
    children: ReactNode
    closeModal: () => void
    dialogRef: RefObject<HTMLDialogElement | null>
    className?: DialogClassNameType
}

export const Dialog: FC<DialogPropsInterface> = ({
    children,
    dialogRef,
    closeModal,
    className
}) => {
    const dialogClassName = classNames(
        styles.dialog,
        styles[className as DialogClassNameType]
    )

    return (
        <dialog
            ref={dialogRef}
            className={dialogClassName}
            onClose={closeModal}
        >
            {children}
        </dialog>
    )
}
