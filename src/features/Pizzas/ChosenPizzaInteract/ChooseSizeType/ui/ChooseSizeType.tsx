import { useState } from 'react'
import styles from './ChooseSizeType.module.scss'
import type { FC } from 'react'
import type { ChangeEvent } from 'react'

const RADIOBOXES = [
    { label: '20 см', value: '20см' },
    { label: '25 см', value: '25см' },
    { label: '30 см', value: '30см' },
    { label: '35 см', value: '35см' }
]

const TYPES = [{ label: 'традиционное' }, { label: 'тонкое' }]

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
                {RADIOBOXES.map((radiobox) => (
                    <div key={radiobox.value} className={styles.sizeElement}>
                        <input
                            type='radio'
                            name='size'
                            id={radiobox.value}
                            value={radiobox.value}
                            checked={valueSize === radiobox.value}
                            onChange={handleChangeSize}
                        />
                        <label htmlFor={radiobox.value}>{radiobox.label}</label>
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
                {TYPES.map((radiobox) => (
                    <div key={radiobox.label} className={styles.typeElement}>
                        <input
                            type='radio'
                            name='size'
                            id={radiobox.label}
                            value={radiobox.label}
                            checked={valueType === radiobox.label}
                            onChange={handleChangeType}
                        />
                        <label htmlFor={radiobox.label}>{radiobox.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
