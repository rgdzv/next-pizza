import classNames from 'classnames'
import {
    PIZZA_TYPES,
    PIZZA_SIZES,
    PIZZA_SIZES_LIST,
    PIZZA_TYPES_LIST
} from 'entities/PizzaCard'
import { CustomButton } from 'shared/ui'
import { useSizeType } from '../../../lib/hooks/useSizeType'
import styles from './ChooseSizeType.module.scss'
import type { PizzaSize, PizzaType } from 'entities/PizzaCard'
import type { FC } from 'react'

export const ChooseSizeType: FC = () => {
    const { pizzaSize, pizzaType, setPizzaSize, setPizzaType } = useSizeType()

    const handleChangeSize = (newSize: PizzaSize) => {
        setPizzaSize(newSize)
        if (
            newSize === PIZZA_SIZES.EXTRA_SMALL ||
            newSize === PIZZA_SIZES.SMALL
        ) {
            setPizzaType(PIZZA_TYPES.TRADITIONAL)
        }
    }

    const handleChangeType = (newType: PizzaType) => {
        setPizzaType(newType)
    }

    const sizes = PIZZA_SIZES_LIST.map((size) => {
        return (
            <CustomButton
                key={size}
                variant='size'
                onClick={() => {
                    handleChangeSize(size)
                }}
            >
                {size}
            </CustomButton>
        )
    })

    const types = PIZZA_TYPES_LIST.map((type) => {
        const isThinDisabled =
            pizzaSize === PIZZA_SIZES.EXTRA_SMALL ||
            pizzaSize === PIZZA_SIZES.SMALL

        const selectedSizeConditions =
            type.id === PIZZA_TYPES.THIN && isThinDisabled

        return (
            <CustomButton
                key={type.id}
                variant='type'
                onClick={() => {
                    handleChangeType(type.id)
                }}
                disabled={selectedSizeConditions}
            >
                {type.name}
            </CustomButton>
        )
    })

    const backLayoutSizeClassName = classNames(styles.backLayoutSize, {
        [styles.small]: pizzaSize === PIZZA_SIZES.SMALL,
        [styles.middle]: pizzaSize === PIZZA_SIZES.MIDDLE,
        [styles.large]: pizzaSize === PIZZA_SIZES.LARGE
    })

    const backLayoutTypeClassName = classNames(styles.backLayoutType, {
        [styles.thin]: pizzaType === PIZZA_TYPES.THIN
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
