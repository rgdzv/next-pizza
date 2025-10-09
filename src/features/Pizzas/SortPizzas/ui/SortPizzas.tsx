'use client'
import { PopoverElement, CustomButton } from 'shared/ui'
import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon } from 'shared/assets'
import { SORTLIST } from '../lib/const/sortList'
import type { FC } from 'react'
import type { SortingObj } from 'widgets/Filters'

interface SortPizzasPropsInterface {
    sortingObj: SortingObj
    setSortingObj: (obj: SortingObj) => void
}

export const SortPizzas: FC<SortPizzasPropsInterface> = ({
    sortingObj,
    setSortingObj
}) => {
    const sortOptions = SORTLIST.map((item) => {
        const handleSortOrder = (order: 'asc' | 'desc') => () => {
            setSortingObj({ ...item, order })
        }

        const isSortButtonActive = (order: 'asc' | 'desc') => {
            return (
                sortingObj.sortProperty === item.sortProperty &&
                sortingObj.order === order
            )
        }

        return (
            <li key={item.name}>
                <CustomButton
                    className='sortArrow'
                    onClick={handleSortOrder('asc')}
                    sortOptionActive={isSortButtonActive('asc')}
                >
                    <ArrowUpIcon title='По возрастанию' />
                </CustomButton>
                <CustomButton
                    className='sortArrow'
                    onClick={handleSortOrder('desc')}
                    sortOptionActive={isSortButtonActive('desc')}
                >
                    <ArrowDownIcon title='По убыванию' />
                </CustomButton>
                <span>{item.name}</span>
            </li>
        )
    })

    const triggerContent = (
        <>
            <ArrowsUpDownIcon title='Сортировка' />
            <span>Сортировка по:</span>
            <span>{sortingObj.name}</span>
        </>
    )

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
