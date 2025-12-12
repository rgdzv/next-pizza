import { useState } from 'react'
import styles from './ChooseSizeType.module.scss'
import type { FC } from 'react'
import type { ChangeEvent } from 'react'

const SIZERADIOBOXES = [
    { label: '20 см', value: '20см' },
    { label: '25 см', value: '25см' },
    { label: '30 см', value: '30см' },
    { label: '35 см', value: '35см' }
]

const TYPERADIOBOXES = [{ label: 'традиционное' }, { label: 'тонкое' }]

// interface ChooseSizeTypePropsInterface {}

export const ChooseSizeType: FC = () => {
    const [valueSize, setValueSize] = useState('20см')
    const [valueType, setValueType] = useState('традиционное')

    const handleChangeSize = (e: ChangeEvent<HTMLInputElement>) => {
        setValueSize(e.target.value)
    }

    const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
        setValueType(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.size}>
                <div
                    className={styles.backLayoutSize}
                    style={{
                        transform:
                            valueSize === '25см'
                                ? 'translateX(calc(100%))'
                                : valueSize === '30см'
                                  ? 'translateX(calc(200%))'
                                  : valueSize === '35см'
                                    ? 'translateX(calc(300%))'
                                    : 'translateX(calc(0%))'
                    }}
                ></div>
                {SIZERADIOBOXES.map((size) => (
                    <div key={size.value} className={styles.sizeElement}>
                        <input
                            type='radio'
                            name='size'
                            id={size.value}
                            value={size.value}
                            checked={valueSize === size.value}
                            onChange={handleChangeSize}
                        />
                        <label htmlFor={size.value}>{size.label}</label>
                    </div>
                ))}
            </div>
            <div className={styles.type}>
                <div
                    className={styles.backLayoutType}
                    style={{
                        transform:
                            valueType === 'тонкое'
                                ? 'translateX(calc(100%))'
                                : 'translateX(calc(0%))'
                    }}
                ></div>
                {TYPERADIOBOXES.map((type) => (
                    <div key={type.label} className={styles.typeElement}>
                        <input
                            type='radio'
                            name='type'
                            id={type.label}
                            value={type.label}
                            checked={valueType === type.label}
                            onChange={handleChangeType}
                        />
                        <label htmlFor={type.label}>{type.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
