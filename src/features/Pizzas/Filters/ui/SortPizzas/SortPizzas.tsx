'use client'
import { Fragment } from 'react'
import { CloseButton } from '@headlessui/react'
import { PopoverElement, CustomButton } from 'shared/ui'
import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon } from 'shared/assets'
import { useFiltersStore } from '../../model/store/provider/filters-store-provider'
import { getSortingObj } from '../../model/store/selectors/getSortingObj/getSortingObj'
import { setSortingObj } from '../../model/store/selectors/setSortingObj/setSortingObj'
import { SORTLIST } from './lib/const/sortList'
import type { FC } from 'react'

export const SortPizzas: FC = () => {
    const sortingObj = useFiltersStore(getSortingObj)
    const handleSortingObj = useFiltersStore(setSortingObj)

    const sortOptions = SORTLIST.map((item) => {
        const handleSortOrder = (order: 'asc' | 'desc') => () => {
            handleSortingObj({ ...item, order })
        }

        const isSortButtonActive = (order: 'asc' | 'desc') => {
            return (
                sortingObj.sortProperty === item.sortProperty &&
                sortingObj.order === order
            )
        }

        return (
            <li key={item.name}>
                <CloseButton as={Fragment}>
                    <CustomButton
                        className='sortArrow'
                        onClick={handleSortOrder('asc')}
                        sortOptionActive={isSortButtonActive('asc')}
                    >
                        <ArrowUpIcon title='По возрастанию' />
                    </CustomButton>
                </CloseButton>
                <CloseButton as={Fragment}>
                    <CustomButton
                        className='sortArrow'
                        onClick={handleSortOrder('desc')}
                        sortOptionActive={isSortButtonActive('desc')}
                    >
                        <ArrowDownIcon title='По убыванию' />
                    </CustomButton>
                </CloseButton>
                <span>{item.name}</span>
            </li>
        )
    })

    const triggerButton = (
        <CustomButton className='sort'>
            <ArrowsUpDownIcon title='Сортировка' />
            <span>Сортировка по:</span>
            <span>{sortingObj.name}</span>
        </CustomButton>
    )

    return (
        <PopoverElement
            options={sortOptions}
            className='sort'
            triggerButton={triggerButton}
        />
    )
}
