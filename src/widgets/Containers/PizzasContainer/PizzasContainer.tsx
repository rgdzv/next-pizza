import { useResetPizzaConfig } from 'features/Pizzas/ChosenPizza'
import { useDialog } from 'shared/ui'
import { PizzaModal } from '../../PizzaModal'
import { Pizzas } from '../../Pizzas'
import type { FC } from 'react'

export const PizzasContainer: FC = () => {
    const { resetPizzaConfig } = useResetPizzaConfig()
    const {
        isDialogOpen,
        openDialog,
        closeDialog,
        dialogRef,
        onBackdropClick
    } = useDialog({
        onClose: resetPizzaConfig
    })

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
