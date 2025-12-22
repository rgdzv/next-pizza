import { useState } from 'react'
import { SIZESPIZZA, TYPESPIZZA } from '../lib/const/const'
import styles from './ChooseSizeType.module.scss'
import type { FC } from 'react'
import type { ChangeEvent } from 'react'

// interface ChooseSizeTypePropsInterface {}

export const ChooseSizeType: FC = () => {
    const [valueSize, setValueSize] = useState(SIZESPIZZA[2].value)
    const [valueType, setValueType] = useState(TYPESPIZZA[0].value)

    const handleChangeSize = (e: ChangeEvent<HTMLInputElement>) => {
        const newSize = e.target.value
        setValueSize(newSize)

        if (newSize === '20' || newSize === '25') {
            setValueType('традиционное')
        }
    }

    const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
        setValueType(e.target.value)
    }

    const isThinTypeDisabled = valueSize === '20' || valueSize === '25'

    // const handleLabelKeyDown =
    //     (sizeValue: string) => (e: KeyboardEvent) => {
    //         if (e.key === 'Enter' || e.key === ' ') {
    //             // Находим соответствующий input и устанавливаем ему checked = true
    //             const inputElement = document.getElementById(
    //                 sizeValue
    //             ) as HTMLInputElement | null
    //             if (inputElement) {
    //                 inputElement.checked = true // Устанавливаем input как выбранный
    //                 handleChangeSize({
    //                     target: inputElement
    //                 } as ChangeEvent<HTMLInputElement>) // Вызываем обработчик изменения размера
    //             } else {
    //                 console.error(`Input с id ${sizeValue} не найден`)
    //             }
    //         }
    //     }

    return (
        <div className={styles.wrapper}>
            <div className={styles.size}>
                <div
                    className={styles.backLayoutSize}
                    style={{
                        transform:
                            valueSize === '25'
                                ? 'translateX(100%)'
                                : valueSize === '30'
                                  ? 'translateX(200%)'
                                  : valueSize === '35'
                                    ? 'translateX(300%)'
                                    : 'translateX(0%)'
                    }}
                ></div>
                {SIZESPIZZA.map((size) => {
                    return (
                        <div key={size.value} className={styles.sizeElement}>
                            <input
                                type='radio'
                                name='size'
                                id={size.value}
                                value={size.value}
                                checked={valueSize === size.value}
                                onChange={handleChangeSize}
                            />
                            <label htmlFor={size.value}>{size.value} см</label>
                        </div>
                    )
                })}
            </div>
            <div className={styles.type}>
                <div
                    className={styles.backLayoutType}
                    style={{
                        transform:
                            valueType === 'тонкое'
                                ? 'translateX(100%)'
                                : 'translateX(0%)'
                    }}
                ></div>
                {TYPESPIZZA.map((type) => (
                    <div key={type.value} className={styles.typeElement}>
                        <input
                            type='radio'
                            name='type'
                            id={type.value}
                            value={type.value}
                            checked={valueType === type.value}
                            onChange={handleChangeType}
                            disabled={
                                type.value === 'тонкое' && isThinTypeDisabled
                            }
                        />
                        <label htmlFor={type.value}>{type.value}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
