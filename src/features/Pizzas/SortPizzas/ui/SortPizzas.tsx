'use client'
import { PopoverElement, CustomButton } from 'shared/ui'
import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon } from 'shared/assets'
import { SORTLIST } from '../lib/const/sortList'
import type { SortingObj } from 'widgets/Filters'
import type { FC } from 'react'

interface SortPizzasPropsInterface {
    sortingObj: SortingObj
    setSortingObj: (obj: SortingObj) => void
}

export const SortPizzas: FC<SortPizzasPropsInterface> = ({
    sortingObj,
    setSortingObj
}) => {
    const triggerContent = (
        <>
            <ArrowsUpDownIcon title='Сортировка' />
            <span>Сортировка по:</span>
            <span>{sortingObj.name}</span>
        </>
    )

    const sortOptions = SORTLIST.map((item) => {
        const handleSort = (order: 'asc' | 'desc') => () => {
            setSortingObj({ ...item, order })
        }

        return (
            <li key={item.name}>
                <CustomButton className='sortArrow' onClick={handleSort('asc')}>
                    <ArrowUpIcon title='По возрастанию' />
                </CustomButton>
                <CustomButton
                    className='sortArrow'
                    onClick={handleSort('desc')}
                >
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
            className='sort'
            buttonClassName='sort'
            component={CustomButton}
        />
    )
}
