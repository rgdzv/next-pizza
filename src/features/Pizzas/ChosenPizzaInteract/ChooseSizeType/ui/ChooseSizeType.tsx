import { useState } from 'react'
import { CustomButton } from 'shared/ui'
import { SIZES, TYPES } from '../lib/const/const'
import styles from './ChooseSizeType.module.scss'
import type { PizzaSizeKeys, PizzaTypeKeys } from 'entities/PizzaCard'
import type { FC } from 'react'

interface ChooseSizeTypePropsInterface {
    setSize: (size: PizzaSizeKeys) => void
    setType: (type: PizzaTypeKeys) => void
}
export const ChooseSizeType: FC<ChooseSizeTypePropsInterface> = ({
    setSize,
    setType
}) => {
    const [selectedSize, setSelectedSize] = useState(SIZES[2].value)
    const [selectedType, setSelectedType] = useState(TYPES[0].value)

    const handleChangeSize = (newSize: PizzaSizeKeys) => {
        setSelectedSize(newSize)
        setSize(newSize)

        if (newSize === '20' || newSize === '25') {
            setSelectedType(TYPES[0].value)
            setType('традиционное')
        }
    }

    const handleChangeType = (newType: PizzaTypeKeys) => {
        setSelectedType(newType)
        setType(newType)
    }

    const sizes = SIZES.map((size) => {
        const handleClickSize = () => {
            handleChangeSize(size.value as PizzaSizeKeys)
        }

        return (
            <CustomButton
                key={size.value}
                className='size'
                onClick={handleClickSize}
            >
                {size.value}
            </CustomButton>
        )
    })

    const types = TYPES.map((type) => {
        const handleClickType = () => {
            handleChangeType(type.value as PizzaTypeKeys)
        }

        const selectedSizeConditions =
            type.value === 'тонкое' &&
            (selectedSize === '20' || selectedSize === '25')

        return (
            <CustomButton
                key={type.value}
                className='type'
                onClick={handleClickType}
                disabled={selectedSizeConditions}
            >
                {type.value}
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
                            selectedSize === '25'
                                ? 'translateX(100%)'
                                : selectedSize === '30'
                                  ? 'translateX(200%)'
                                  : selectedSize === '35'
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
                            selectedType === 'тонкое'
                                ? 'translateX(100%)'
                                : 'translateX(0%)'
                    }}
                ></div>
                {types}
            </div>
        </div>
    )
}
