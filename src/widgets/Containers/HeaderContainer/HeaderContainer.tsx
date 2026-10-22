'use client'
import { useDialog } from 'shared/ui'
import { Header } from '../../Header'
import { Basket } from '../../Basket'
import type { FC } from 'react'

export const HeaderContainer: FC = () => {
    const { openDialog, closeDialog, dialogRef, onBackdropClick } = useDialog()

    return (
        <>
            <Header openDialog={openDialog} />
            <Basket
                dialogRef={dialogRef}
                closeDialog={closeDialog}
                onBackdropClick={onBackdropClick}
            />
        </>
    )
}
