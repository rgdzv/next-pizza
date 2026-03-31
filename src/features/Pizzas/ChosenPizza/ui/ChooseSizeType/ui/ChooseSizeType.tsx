import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import { CustomButton } from 'shared/ui'
import { SIZES, TYPES } from '../lib/const/shapes'
import { useChosenPizza } from '../../../lib/hooks/useChosenPizza'
import styles from './ChooseSizeType.module.scss'
import type { FC } from 'react'
import type { PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'

export const ChooseSizeType: FC = () => {
    const { pizzaSize, pizzaType, setPizzaSize, setPizzaType } =
        useChosenPizza()

    const handleChangeSize = (newSize: PizzaSizeKeys) => {
        setPizzaSize(newSize)
        if (newSize === PizzaSize.EXTRA_SMALL || newSize === PizzaSize.SMALL) {
            setPizzaType(PizzaType.TRADITIONAL)
        }
    }

    const handleChangeType = (newType: PizzaTypeKeys) => {
        setPizzaType(newType)
    }

    const sizes = SIZES.map((size) => {
        const handleClickSize = () => {
            handleChangeSize(size)
        }

        return (
            <CustomButton key={size} className='size' onClick={handleClickSize}>
                {size}
            </CustomButton>
        )
    })

    const types = TYPES.map((type) => {
        const handleClickType = () => {
            handleChangeType(type)
        }

        const selectedSizeConditions =
            type === PizzaType.THIN &&
            (pizzaSize === PizzaSize.EXTRA_SMALL ||
                pizzaSize === PizzaSize.SMALL)

        return (
            <CustomButton
                key={type}
                className='type'
                onClick={handleClickType}
                disabled={selectedSizeConditions}
            >
                {type}
            </CustomButton>
        )
    })

    return (
        <div className={styles.pizzaInfoSizeType}>
            <div className={styles.size}>
                <div
                    className={styles.backLayoutSize}
                    style={{
                        transform:
                            pizzaSize === PizzaSize.SMALL
                                ? 'translateX(100%)'
                                : pizzaSize === PizzaSize.MIDDLE
                                  ? 'translateX(200%)'
                                  : pizzaSize === PizzaSize.LARGE
                                    ? 'translateX(300%)'
                                    : 'translateX(0%)'
                    }}
                ></div>
                {sizes}
            </div>
            <div className={styles.type}>
                <div
                    className={styles.backLayoutType}
                    style={{
                        transform:
                            pizzaType === PizzaType.THIN
                                ? 'translateX(100%)'
                                : 'translateX(0%)'
                    }}
                ></div>
                {types}
            </div>
        </div>
    )
}
