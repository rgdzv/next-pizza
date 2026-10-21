'use client'
import { Fragment } from 'react'
import { CloseButton } from '@headlessui/react'
import { PopoverElement, CustomButton } from 'shared/ui'
import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon } from 'shared/assets'
import { useSort } from '../../lib/hooks/useSort'
import { SORTLIST } from './lib/const/sortList'
import type { FC } from 'react'

export const SortPizzas: FC = () => {
    const { sortingObj, onChangeSortingObj } = useSort()

    const sortOptions = SORTLIST.map((item) => {
        const handleSortOrder = (order: 'asc' | 'desc') => () => {
            onChangeSortingObj({ ...item, order })
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
                        variant='sortArrow'
                        onClick={handleSortOrder('asc')}
                        data-active={isSortButtonActive('asc')}
                    >
                        <ArrowUpIcon title='По возрастанию' />
                    </CustomButton>
                </CloseButton>
                <CloseButton as={Fragment}>
                    <CustomButton
                        variant='sortArrow'
                        onClick={handleSortOrder('desc')}
                        data-active={isSortButtonActive('desc')}
                    >
                        <ArrowDownIcon title='По убыванию' />
                    </CustomButton>
                </CloseButton>
                <span>{item.name}</span>
            </li>
        )
    })

    const triggerButton = (
        <CustomButton variant='sort'>
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
