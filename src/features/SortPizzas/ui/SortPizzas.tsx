import { useState } from 'react'
import { PopoverElement, CustomButton } from 'shared/ui'
import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon } from 'shared/assets'
import { SORTLIST } from '../lib/const/sortList'
import type { FC } from 'react'

export const SortPizzas: FC = () => {
    const [name] = useState('рейтингу')

    const triggerContent = (
        <>
            <ArrowsUpDownIcon title='Сортировка' />
            <span>Сортировка по:</span>
            <span>{name}</span>
        </>
    )

    const sortOptions = SORTLIST.map((sortName) => {
        return (
            <li key={sortName.name}>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <CustomButton className='sortArrow'>
                        <ArrowUpIcon title='По возрастанию' />
                    </CustomButton>
                    <CustomButton className='sortArrow'>
                        <ArrowDownIcon title='По убыванию' />
                    </CustomButton>
                </div>
                <span>{sortName.name}</span>
            </li>
        )
    })

    return (
        <PopoverElement
            triggerContent={triggerContent}
            options={sortOptions}
            buttonClassName='sort'
            component={CustomButton}
        />
    )
}
