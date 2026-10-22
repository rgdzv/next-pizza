import { useDialog } from 'shared/ui'
import { PizzaModal } from '../../PizzaModal'
import { Pizzas } from '../../Pizzas'
import type { FC } from 'react'

export const PizzasContainer: FC = () => {
    const {
        isDialogOpen,
        openDialog,
        closeDialog,
        dialogRef,
        onBackdropClick
    } = useDialog()

    return (
        <>
            <Pizzas openDialog={openDialog} />
            {isDialogOpen && (
                <PizzaModal
                    dialogRef={dialogRef}
                    closeDialog={closeDialog}
                    onBackdropClick={onBackdropClick}
                />
            )}
        </>
    )
}
