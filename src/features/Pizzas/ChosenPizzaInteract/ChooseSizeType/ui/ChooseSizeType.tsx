import { CustomButton } from 'shared/ui'
import { SIZES, TYPES } from '../lib/const/shapes'
import styles from './ChooseSizeType.module.scss'
import type { PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'
import type { FC } from 'react'

interface ChooseSizeTypePropsInterface {
    pizzaSize: PizzaSizeKeys
    pizzaType: PizzaTypeKeys
    setSize: (size: PizzaSizeKeys) => void
    setType: (type: PizzaTypeKeys) => void
}
export const ChooseSizeType: FC<ChooseSizeTypePropsInterface> = ({
    pizzaSize,
    pizzaType,
    setSize,
    setType
}) => {
    const handleChangeSize = (newSize: PizzaSizeKeys) => {
        setSize(newSize)
        if (newSize === '20' || newSize === '25') {
            setType('традиционное')
        }
    }

    const handleChangeType = (newType: PizzaTypeKeys) => {
        setType(newType)
    }

    const sizes = SIZES.map((size) => {
        const handleClickSize = () => {
            handleChangeSize(size as PizzaSizeKeys)
        }

        return (
            <CustomButton key={size} className='size' onClick={handleClickSize}>
                {size}
            </CustomButton>
        )
    })

    const types = TYPES.map((type) => {
        const handleClickType = () => {
            handleChangeType(type as PizzaTypeKeys)
        }

        const selectedSizeConditions =
            type === 'тонкое' && (pizzaSize === '20' || pizzaSize === '25')

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
        <div className={styles.wrapper}>
            <div className={styles.size}>
                <div
                    className={styles.backLayoutSize}
                    style={{
                        transform:
                            pizzaSize === '25'
                                ? 'translateX(100%)'
                                : pizzaSize === '30'
                                  ? 'translateX(200%)'
                                  : pizzaSize === '35'
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
                            pizzaType === 'тонкое'
                                ? 'translateX(100%)'
                                : 'translateX(0%)'
                    }}
                ></div>
                {types}
            </div>
        </div>
    )
}
