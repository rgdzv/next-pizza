import classNames from 'classnames'
import { PizzaSize, PizzaType } from 'entities/PizzaCard'
import { CustomButton } from 'shared/ui'
import { SIZES, TYPES } from '../lib/const/shapes'
import { useSizeType } from '../../../lib/hooks/useSizeType'
import styles from './ChooseSizeType.module.scss'
import type { FC } from 'react'
import type { PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'

export const ChooseSizeType: FC = () => {
    const { pizzaSize, pizzaType, setPizzaSize, setPizzaType } = useSizeType()

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
            handleChangeType(type.id)
        }

        const selectedSizeConditions =
            type.id === PizzaType.THIN &&
            (pizzaSize === PizzaSize.EXTRA_SMALL ||
                pizzaSize === PizzaSize.SMALL)

        return (
            <CustomButton
                key={type.id}
                className='type'
                onClick={handleClickType}
                disabled={selectedSizeConditions}
            >
                {type.name}
            </CustomButton>
        )
    })

    const backLayoutSizeClassName = classNames(styles.backLayoutSize, {
        [styles.small]: pizzaSize === PizzaSize.SMALL,
        [styles.middle]: pizzaSize === PizzaSize.MIDDLE,
        [styles.large]: pizzaSize === PizzaSize.LARGE
    })

    const backLayoutTypeClassName = classNames(styles.backLayoutType, {
        [styles.thin]: pizzaType === PizzaType.THIN
    })

    return (
        <div
            className={styles.pizzaInfoSizeType}
            data-testid='choose-size-type'
        >
            <div className={styles.size}>
                <div className={backLayoutSizeClassName}></div>
                {sizes}
            </div>
            <div className={styles.type}>
                <div className={backLayoutTypeClassName}></div>
                {types}
            </div>
        </div>
    )
}
