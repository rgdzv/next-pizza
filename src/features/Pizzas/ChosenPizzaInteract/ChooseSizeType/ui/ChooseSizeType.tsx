import { useState } from 'react'
import { CustomButton } from 'shared/ui'
import { SIZES, TYPES } from '../lib/const/const'
import styles from './ChooseSizeType.module.scss'
import type { FC } from 'react'

// interface ChooseSizeTypePropsInterface {}

export const ChooseSizeType: FC = () => {
    const [selectedSize, setSelectedSize] = useState(SIZES[2].value)
    const [selectedType, setSelectedType] = useState(TYPES[0].value)

    const handleChangeSize = (newSize: string) => {
        setSelectedSize(newSize)

        if (newSize === '20' || newSize === '25') {
            setSelectedType(TYPES[0].value)
        }
    }

    const handleChangeType = (newType: string) => {
        setSelectedType(newType)
    }

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
                {SIZES.map((size) => {
                    const handleClickSize = () => {
                        handleChangeSize(size.value)
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
                })}
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
                {TYPES.map((type) => {
                    const handleClickType = () => {
                        handleChangeType(type.value)
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
                })}
            </div>
        </div>
    )
}
