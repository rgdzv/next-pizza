import { useEffect, type FC, type RefObject } from 'react'
import {
    AddIngredients,
    AddToBasket,
    ChooseSizeType,
    RemoveIngredients,
    ShowPizzaImage,
    ShowPizzaTitle,
    useFetchExtraIngredients
} from 'features/Pizzas/ChosenPizza'
import { CustomButton, Dialog } from 'shared/ui'
import { CrossIcon } from 'shared/assets'
import styles from './PizzaModal.module.scss'

interface PizzaModalPropsInterface {
    dialogRef: RefObject<HTMLDialogElement | null>
    closeDialog: () => void
    onBackdropClick: (e: React.MouseEvent<HTMLDialogElement>) => void
}

export const PizzaModal: FC<PizzaModalPropsInterface> = ({
    dialogRef,
    closeDialog,
    onBackdropClick
}) => {
    const { fetchExtraIngredients } = useFetchExtraIngredients()

    useEffect(() => {
        void fetchExtraIngredients()
    }, [fetchExtraIngredients])

    return (
        <Dialog
            dialogRef={dialogRef}
            onClick={onBackdropClick}
            variant='pizzaModal'
        >
            <div className={styles.pizzaModal}>
                <ShowPizzaImage />
                <div className={styles.pizzaInfoWrapper}>
                    <div className={styles.pizzaInfo}>
                        <ShowPizzaTitle />
                        <RemoveIngredients />
                        <ChooseSizeType />
                        <AddIngredients />
                        <AddToBasket closeDialog={closeDialog} />
                    </div>
                </div>
                <CustomButton variant='closeModal' onClick={closeDialog}>
                    <CrossIcon title='Закрыть окно' />
                </CustomButton>
            </div>
        </Dialog>
    )
}
