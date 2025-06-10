import { useState } from 'react'
import { PopoverElement, CustomButton } from 'shared/ui'
import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon } from 'shared/assets'
import { SORTLIST } from '../lib/const/sortList'
import type { FC } from 'react'

export const SortPizzas: FC = () => {
    const [obj, setObj] = useState({ name: 'рейтингу', sortProperty: 'rating' })

    const triggerContent = (
        <>
            <ArrowsUpDownIcon title='Сортировка' />
            <span>Сортировка по:</span>
            <span>{obj.name}</span>
        </>
    )

    const sortOptions = SORTLIST.map((item) => {
        const handleClick = () => {
            setObj({ ...item })
        }

        return (
            <li key={item.name}>
                <CustomButton className='sortArrow' onClick={handleClick}>
                    <ArrowUpIcon title='По возрастанию' />
                </CustomButton>
                <CustomButton className='sortArrow' onClick={handleClick}>
                    <ArrowDownIcon title='По убыванию' />
                </CustomButton>
                <span>{item.name}</span>
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
